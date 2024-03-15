import 'package:flutter/material.dart';
import 'package:portfolio/core/utils/app_assets.dart';
import '../widgets/body/home_body.dart';
import '../widgets/app_bar/home_app_bar.dart';

class HomeView extends StatefulWidget {
  const HomeView({super.key});

  @override
  State<HomeView> createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  @override
  void didChangeDependencies() {
    // TODO: implement didChangeDependencies
    super.didChangeDependencies();
    precacheImage(const AssetImage(AppAssets.nutriwestAppMockup), context);
    precacheImage(const AssetImage(AppAssets.ethreadAppMockup), context);
    precacheImage(const AssetImage(AppAssets.quranAppMockup), context);
    precacheImage(const AssetImage(AppAssets.mahsaAppMockup), context);
    precacheImage(
        const AssetImage(AppAssets.footballUniverseAppMockuo), context);
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      appBar: HomeAppBar(),
      body: HomeBody(),
    );
  }
}
