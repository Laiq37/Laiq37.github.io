import 'package:flutter/material.dart';
import 'package:portfolio/core/utils/app_colors.dart';

class ProjectImage extends StatelessWidget {
  const ProjectImage({super.key, required this.imageUrl});
  final String imageUrl;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 150,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(8),
        child: Image(
          image: AssetImage(imageUrl),
          width: double.infinity,
          fit: BoxFit.cover,
          errorBuilder: (context, error, stackTrace) => Center(
            child: Icon(
              Icons.error,
              color: AppColors.darkColor,
              size: 50,
            ),
          ),
        ),
      ),
    );
  }
}
