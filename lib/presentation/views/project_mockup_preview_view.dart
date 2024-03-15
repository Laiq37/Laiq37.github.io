import 'package:flutter/material.dart';
import 'package:portfolio/core/utils/app_colors.dart';

class ProjectMockupPreviewView extends StatefulWidget {
  final String imgUrl;
  const ProjectMockupPreviewView({super.key, required this.imgUrl});

  @override
  State<ProjectMockupPreviewView> createState() =>
      _ProjectMockupPreviewViewState();
}

class _ProjectMockupPreviewViewState extends State<ProjectMockupPreviewView> {
  bool isLoading = true;

  precacheAssetImage() {
    precacheImage(AssetImage(widget.imgUrl), context)
        .whenComplete(() => WidgetsBinding.instance.addPostFrameCallback((_) {
              setState(() {
                isLoading = false;
              });
            }));
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    precacheAssetImage();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
          child: isLoading
              ? CircularProgressIndicator(
                  color: AppColors.primaryColor,
                )
              : InteractiveViewer(
                  maxScale: 10,
                  minScale: 1,
                  child: SizedBox(
                    height: double.infinity,
                    child: Image(
                      image: AssetImage(widget.imgUrl),
                      // width: double.infinity,
                      // fit: BoxFit.cover,
                      // loadingBuilder: (context, child, loadingProgress) {
                      //   return const Center(child: CircularProgressIndicator());
                      // },
                      errorBuilder: (context, error, stackTrace) => Icon(
                        Icons.error,
                        color: AppColors.darkColor,
                        size: 50,
                      ),
                    ),
                  ))),
    );
  }
}
