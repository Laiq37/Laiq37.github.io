import '../../data/models/custom_service.dart';
import '../../data/models/project.dart';
import 'app_assets.dart';

abstract class AppConstants {
  static const double appBarHeight = 80;
  static const List<CustomService> services = [
    CustomService(
      service: 'MOBILE DEVELOPMENT',
      logo: AppAssets.androidLogo,
      description:
          'Experienced Flutter Mobile App Developer skilled in API integration, Google Maps, and Firebase. Expert in state management (Provider, Riverpod, Get) and local storage (SQL, Hive, SharedPreferences). Let\'s build your app together!',
    ),
    CustomService(
      service: 'Backend Development',
      logo: AppAssets.backendLogo,
      description:
          'I collaborate with an experienced team of backend developers to ensure quality work and timely project completion, guaranteeing seamless integration and functionality for projects..',
    ),
    CustomService(
      service: 'WEB SCRAPING',
      logo: AppAssets.scrappingLogo,
      description:
          'I can collect content and data from the internet then manipulate and analyze as needed.',
    ),
  ];
  static const List<Project> projects = [
    Project(
      name: 'Football Universe',
      imageUrl: AppAssets.footballUniverseLogo,
      description:
          'An Application stay updated with the latest sports news, fixtures, and scores. Explore past, current, and upcoming events with ease.',
      githubRepoLink: "https://github.com/Laiq37/football_universe",
      previewLink: AppAssets.footballUniverseAppMockuo,
    ),
    Project(
      name: 'Mahsa',
      imageUrl: AppAssets.mahsaLogo,
      description:
          'An app to Facilitate group communication with chat and post rooms. Exchange text, voice, video, and gif messages.',
      githubRepoLink: 'https://github.com/Laiq37/mahsa_chat',
      previewLink: AppAssets.mahsaAppMockup,
    ),
    Project(
      name: 'Quran App',
      imageUrl: AppAssets.quranAppLogo,
      description:
          'An application to Access the Quran in English and Tamil translations. Share verses easily and enjoy a seamless reading experience with localization support.',
      githubRepoLink: 'https://github.com/Laiq37/Quran_app',
      previewLink: AppAssets.quranAppMockup,
    ),
    Project(
      name: 'E-thread',
      imageUrl: AppAssets.ethreadLogo,
      description:
          'An application which simplifies the daily tasks of waste collection companies and individuals.',
      githubRepoLink: "https://github.com/Laiq37/ethread",
      previewLink: AppAssets.ethreadAppMockup,
    ),
    Project(
      name: 'Nutriwest',
      imageUrl: AppAssets.nutriwestLogo,
      description:
          'An application simplify supplement shopping with Nutriwest\'s app, catering to customers and distributors alike. Customers can browse and purchase products, while distributors gain access to exclusive updates on Nutriwest group events such as webinars and seminars.',
      previewLink: AppAssets.nutriwestAppMockup,
    ),
    Project(
        name: 'Blink-POS',
        imageUrl: AppAssets.blinkLogo,
        description:
            "A comprehensive POS solution tailored for restaurants, Blink-Pos simplifies order management and financial tracking. Restaurant managers can initiate their shifts by inputting starting drawer balances, then efficiently process orders throughout their shift."
        // 'An application to Manage restaurant orders seamlessly. Track shifts effortlessly with automated drawer balance calculation for enhanced accountability.',
        // previewLink: AppAssets.blinkPosMockup,
        ),
  ];
}
