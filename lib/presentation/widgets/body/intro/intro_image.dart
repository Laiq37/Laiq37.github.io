import 'package:flutter/material.dart';

import '../../../../core/utils/app_assets.dart';
import '../../../../core/utils/app_extensions.dart';
import '../../../../data/models/responsive_size.dart';

class IntroImage extends StatelessWidget {
  const IntroImage({super.key});

  @override
  Widget build(BuildContext context) {
    final responsiveSize = ResponsiveSize(
      deviceWidth: context.width,
      mobileSize: context.width * .6,
      ipadSize: context.width * .4,
      smallScreenSize: context.width * .3,
    );

    return Positioned(
      // alignment: Alignment.topRight,
      top: 0,
      right: 8,
      child: Image.asset(
        AppAssets.devImg,
        width: responsiveSize.getSize(),
        height: responsiveSize.getSize(),
      ),
    );
  }
}
