import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

import 'bloc_observer.dart';
import 'portfolio_app.dart';

Future main() async {
  Bloc.observer = MyBlocObserver();
  await dotenv.load(fileName: ".env");
  runApp(const PortfolioApp());
}
