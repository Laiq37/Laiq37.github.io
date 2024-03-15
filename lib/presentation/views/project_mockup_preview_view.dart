import 'package:flutter/material.dart';
import 'package:portfolio/core/utils/app_colors.dart';

class ProjectMockupPreviewView extends StatelessWidget {
  final String imgUrl;
  const ProjectMockupPreviewView({super.key, required this.imgUrl});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
          child: InteractiveViewer(
              maxScale: 10,
              minScale: 1,
              child: SizedBox(
                height: double.infinity,
                child: Image(
                  image: AssetImage(imgUrl),
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
