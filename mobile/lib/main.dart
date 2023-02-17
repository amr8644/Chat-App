import 'package:flut/colors.dart';
import 'package:flut/routes.dart';
import 'package:flut/screens/Login.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        // theme: (ThemeData.dark().copyWith(
        //     // scaffoldBackgroundColor: backgroundColor,
        //     appBarTheme: const AppBarTheme(color: appBarColor))),
        onGenerateRoute: (settings) => generateRoute(settings),
        home: LoginScreen());
  }
}
