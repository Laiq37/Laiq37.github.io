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
        name: 'Blink-POS',
        imageUrl: AppAssets.blinkLogo,
        description:
            "A comprehensive POS solution tailored for restaurants, Blink-Pos simplifies order management and financial tracking. Restaurant managers can initiate their shifts by inputting starting drawer balances, then efficiently process orders throughout their shift.",
        techDescription:
            'Utilizes Flutter for Mobile App development, flutter_secured_storage for local data storage, and dio for API handling. Adopts the MVVM architecture with Provider for state management. Currently under development for both Android and iOS.',
        // 'Developed with Flutter, utilizing flutter_secured_storage and Dio. State management via Provider.',
        // 'An application to Manage restaurant orders seamlessly. Track shifts effortlessly with automated drawer balance calculation for enhanced accountability.',
        // previewLink: AppAssets.blinkPosMockup,
        googlePlay: "https://play.google.com/store/apps/details?id=com.techworks.pos",
        appStore: "https://apps.apple.com/us/app/blink-pos/id6445891133"
        ),
        Project(
      name: 'Nutriwest',
      imageUrl: AppAssets.nutriwestLogo,
      description:
          'An application simplify supplement shopping with Nutriwest\'s app, catering to customers and distributors alike. Customers can browse and purchase products, while distributors gain access to exclusive updates on Nutriwest group events such as webinars and seminars.',
      techDescription:
          'Developed with Flutter for Mobile App development, utilizing the MVVM architecture with GETx for state management. Offers Firebase Push Notification services and is available on both Android and iOS.',
      googlePlay: "https://play.google.com/store/apps/details?id=com.nutriwest.app",
      appStore: "https://apps.apple.com/us/app/nutri-west/id6476763673"
      
    ),
    Project(
      name: 'Football Universe',
      imageUrl: AppAssets.footballUniverseLogo,
      description:
          'An Application stay updated with the latest sports news, fixtures, and scores. Explore past, current, and upcoming events with ease.',
      techDescription:
          'Built using Flutter for Mobile App development, shared preferences for local storage, and HTTP for API handling. Implements the MVVM architecture with GETx for state management. Available on both Android platforms.',
      githubRepoLink: "https://github.com/Laiq37/football_universe",
      previewLink: AppAssets.footballUniverseAppMockuo,
    ),
    Project(
      name: 'Mahsa',
      imageUrl: AppAssets.mahsaLogo,
      description:
          "An app facilitating group chat functionalities, including chat rooms and post rooms, allowing users to exchange voice, text, video, and GIF messages.",
      // 'An app to Facilitate group communication with chat and post rooms. Exchange text, voice, video, and gif messages.',
      techDescription:
          'Developed using Flutter for Mobile App development and Firebase services (realtime database, authentication, cloud storage). Implements the MVVM architecture and utilizes Riverpod for state management. Available on Android.',
      githubRepoLink: 'https://github.com/Laiq37/mahsa_chat',
      previewLink: AppAssets.mahsaAppMockup,
    ),
    Project(
      name: 'Quran App',
      imageUrl: AppAssets.quranAppLogo,
      description:
          'A Quran application enabling users to read the Quran with translations in English and Tamil, alongside the ability to share or copy verses. Supports two localizations - English & Tamil.',
      // 'An application to Access the Quran in English and Tamil translations. Share verses easily and enjoy a seamless reading experience with localization support.',
      techDescription:
          'Built with Flutter for Mobile App development, SQL for local storage, and shared preferences. Adheres to the MVC architecture and employs GETx for state management. Available on both Android and iOS.',
      githubRepoLink: 'https://github.com/Laiq37/Quran_app',
      previewLink: AppAssets.quranAppMockup,
    ),
    Project(
      name: 'E-thread',
      imageUrl: AppAssets.ethreadLogo,
      description:
          'An app tailored for waste collection and management businesses, facilitating daily routes for drivers to collect waste from multiple locations. Drivers can capture before and after images of waste bins for each collection point.',
      // 'An application which simplifies the daily tasks of waste collection companies and individuals.',
      techDescription:
          'Developed using Flutter for Mobile App development, with Hive for local storage, Http, and dio for API integration. Follows the MVVM architecture with state management using GETx.',
      githubRepoLink: "https://github.com/Laiq37/ethread",
      previewLink: AppAssets.ethreadAppMockup,
    ),
  ];
}
