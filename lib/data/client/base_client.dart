import 'dart:convert';

import 'package:http/http.dart' as http;

class BaseClient {
  Future post(String url, dynamic body) async {
    final response = await http.post(Uri.parse(url),
        headers: {
          "Origin": "http://localhost",
          "Content-type": "application/json",
        },
        body: json.encode(body));
    if (response.statusCode == 200) return;
    throw 'Message not sent';
  }
}
