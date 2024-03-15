import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:portfolio/data/client/base_client.dart';
import 'package:portfolio/data/models/contact_info.dart';

class ContactRepository {
  Future sendEmail(UserMailInfo emailInfo) async {
    await BaseClient().post("https://api.emailjs.com/api/v1.0/email/send", {
      "service_id": dotenv.get("SERVICE_ID"),
      "template_id": dotenv.get("TEMPLATE_ID"),
      "user_id": dotenv.get("USER_ID"),
      "template_params": emailInfo.toJson()
    });
  }
}
