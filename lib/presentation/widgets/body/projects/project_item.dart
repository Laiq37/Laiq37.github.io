import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';

import '../../../../core/utils/app_colors.dart';
import '../../../../core/utils/app_styles.dart';
import '../../../../data/models/project.dart';
import 'project_actions.dart';
import 'project_image.dart';

class ProjectItem extends StatelessWidget {
  const ProjectItem({super.key, required this.project});
  final Project project;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(8),
        color: AppColors.primaryLight,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ProjectImage(imageUrl: project.imageUrl),
          const SizedBox(height: 16),
          FittedBox(
            child: Text(
              project.name,
              style: AppStyles.s24.copyWith(color: AppColors.primaryColor),
            ),
          ),
          const SizedBox(height: 8),
          Expanded(
            child: AutoSizeText(
              project.description,
              style: AppStyles.s15.copyWith(fontWeight: FontWeight.w500),
              minFontSize: 13,
              // maxLines: 6,
            ),
          ),
          const SizedBox(height: 8),
          Text(
            "Tech Stack:",
            style: AppStyles.s16.copyWith(fontSize: 20),
          ),
          Expanded(
            child: AutoSizeText(
              project.techDescription,
              style: AppStyles.s15.copyWith(fontWeight: FontWeight.w500),
              minFontSize: 13,
              // maxLines: 6,
            ),
          ),
          const SizedBox(height: 8),
          // if (project.previewLink != null || project.githubRepoLink != null)
          ProjectActions(project: project)
        ],
      ),
    );
  }
}
