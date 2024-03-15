import 'package:flutter/material.dart';
import 'package:portfolio/data/models/project.dart';
import 'package:portfolio/presentation/views/project_mockup_preview_view.dart';

import '../../../../core/utils/app_colors.dart';
import '../../../../core/widgets/custom_button.dart';
import 'package:universal_html/html.dart' as html;

class ProjectActions extends StatelessWidget {
  const ProjectActions({super.key, required this.project});

  final Project project;

  @override
  Widget build(BuildContext context) {
    return Flexible(
      fit: FlexFit.tight,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          if (project.previewLink != null)
            Expanded(
              child: CustomButton(
                label: 'Preview',
                backgroundColor: AppColors.primaryColor,
                onPressed: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => ProjectMockupPreviewView(
                              imgUrl: project.previewLink!)));
                },
              ),
            ),
          if (project.githubRepoLink != null) ...[
            if (project.previewLink != null) const SizedBox(width: 18),
            Expanded(
              child: CustomButton(
                label: 'Github',
                borderColor: AppColors.primaryColor,
                onPressed: () {
                  html.window.open(project.githubRepoLink!, '_blank');
                },
              ),
            ),
          ],
          if (project.googlePlay != null) ...[
            if (project.previewLink != null || project.githubRepoLink != null)
              const SizedBox(width: 18),
            Expanded(
              child: CustomButton(
                label: 'play store',
                borderColor: AppColors.primaryColor,
                onPressed: () {
                  html.window.open(project.googlePlay!, '_blank');
                },
              ),
            ),
          ],
        ],
      ),
    );
  }
}
