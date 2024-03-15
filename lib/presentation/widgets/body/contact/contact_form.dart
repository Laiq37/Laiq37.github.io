import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:portfolio/data/models/contact_info.dart';
import 'package:portfolio/data/repositories/contact_repository.dart';

import '../../../../core/utils/app_colors.dart';
import '../../../../core/utils/app_enums.dart';
import '../../../../core/utils/app_extensions.dart';
import '../../../../core/utils/app_styles.dart';
import '../../../../core/widgets/custom_button.dart';

class ContactForm extends StatefulWidget {
  const ContactForm({super.key});

  @override
  State<ContactForm> createState() => _ContactFormState();
}

class _ContactFormState extends State<ContactForm> {
  late GlobalKey<FormState> _formKey;
  late TextEditingController _emailController;
  late TextEditingController _messageController;
  late TextEditingController _nameController;
  late TextEditingController _subjectController;
  final ValueNotifier<bool> isLoadingNotifier = ValueNotifier(false);

  @override
  void initState() {
    super.initState();
    _formKey = GlobalKey();
    _emailController = TextEditingController();
    _messageController = TextEditingController();
    _nameController = TextEditingController();
    _subjectController = TextEditingController();
  }

  @override
  void dispose() {
    _emailController.dispose();
    _messageController.dispose();
    _nameController.dispose();
    _subjectController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: _getFormWidth(context.width),
      child: Form(
        key: _formKey,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            TextFormField(
              controller: _nameController,
              style: AppStyles.s14,
              validator: (value) {
                if (value!.trim().isEmpty) return "Please Enter your name";
                return null;
              },
              decoration: const InputDecoration(labelText: 'Name'),
            ),
            const SizedBox(height: 12),
            TextFormField(
              controller: _emailController,
              validator: (value) {
                if (value!.trim().isEmpty || !value.isValidEmail())
                  return "Please enter a valid email";
                return null;
              },
              style: AppStyles.s14,
              decoration: const InputDecoration(labelText: 'E-mail'),
            ),
            const SizedBox(height: 12),
            TextFormField(
              controller: _subjectController,
              style: AppStyles.s14,
              decoration: const InputDecoration(labelText: 'Subject'),
            ),
            const SizedBox(height: 12),
            TextFormField(
              controller: _messageController,
              maxLines: 5,
              validator: (value) =>
                  value!.trim().isEmpty ? "Please enter your message" : null,
              style: AppStyles.s14,
              decoration: const InputDecoration(
                labelText: 'Type a message here...',
              ),
            ),
            const SizedBox(height: 16),
            ValueListenableBuilder(
                valueListenable: isLoadingNotifier,
                builder: (context, isloading, _) {
                  return CustomButton(
                    label: 'Submit',
                    onPressed: () async {
                      try {
                        if (!_formKey.currentState!.validate()) return;
                        isLoadingNotifier.value = true;
                        await ContactRepository().sendEmail(UserMailInfo(
                            email: _emailController.text,
                            name: _nameController.text,
                            message: _messageController.text,
                            subject: _subjectController.text));
                        if (!mounted) return;
                        ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                                content: Text("Thank you for Contacting...")));
                      } catch (e) {
                        log(e.toString());
                        if (mounted) return;
                        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                          content: const Text(
                              "Failed to submit, Please try Again..."),
                          backgroundColor: AppColors.primaryColor,
                        ));
                      } finally {
                        isLoadingNotifier.value = false;
                      }
                    },
                    backgroundColor: AppColors.primaryColor,
                    width: _getFormWidth(context.width),
                    child: isloading ? const CircularProgressIndicator() : null,
                  );
                }),
          ],
        ),
      ),
    );
  }

  double _getFormWidth(double deviceWidth) {
    if (deviceWidth < DeviceType.mobile.getMaxWidth()) {
      return deviceWidth;
    } else if (deviceWidth < DeviceType.ipad.getMaxWidth()) {
      return deviceWidth / 1.6;
    } else if (deviceWidth < DeviceType.smallScreenLaptop.getMaxWidth()) {
      return deviceWidth / 2;
    } else {
      return deviceWidth / 2.5;
    }
  }
}
