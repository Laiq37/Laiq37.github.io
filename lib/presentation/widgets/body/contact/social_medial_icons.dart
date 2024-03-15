import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:portfolio/core/utils/app_strings.dart';
import 'package:universal_html/html.dart' as html;

import '../../../../core/utils/app_colors.dart';
import '../../../../core/utils/social_links.dart';

class SocialMediaIcons extends StatelessWidget {
  const SocialMediaIcons({super.key});

  @override
  Widget build(BuildContext context) {
    return const Wrap(
      children: [
        SocialMediaIconBtn(
          icon: FontAwesomeIcons.facebook,
          link: SocialLinks.facebook,
        ),
        SocialMediaIconBtn(
          icon: FontAwesomeIcons.linkedinIn,
          link: SocialLinks.linkedin,
        ),
        SocialMediaIconBtn(
          icon: FontAwesomeIcons.twitter,
          link: SocialLinks.twitter,
        ),
        SocialMediaIconBtn(
          svg: AppStrings.upwork,
          link: SocialLinks.upwork,
        ),
      ],
    );
  }
}

class SocialMediaIconBtn extends StatelessWidget {
  const SocialMediaIconBtn({super.key, this.svg, this.icon, this.link});
  final IconData? icon;
  final String? svg;
  final String? link;

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: IconButton.styleFrom(
        shape: const CircleBorder(),
        padding: const EdgeInsets.all(15),
      ),
      onPressed: () {
        html.window.open(link!, '_blank');
      },
      child: svg != null
          ? SvgPicture.string(svg!,
              height: 32,
              colorFilter:
                  ColorFilter.mode(AppColors.primaryColor, BlendMode.srcIn))
          : Icon(
              icon,
              color: AppColors.primaryColor,
              size: 32,
            ),
    );
  }
}
