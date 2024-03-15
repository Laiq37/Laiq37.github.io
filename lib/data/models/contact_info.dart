class UserMailInfo {
  final String name;
  final String email;
  final String? subject;
  final String message;

  UserMailInfo(
      {required this.email,
      required this.name,
      required this.message,
      this.subject});

  toJson() {
    return {
      "user_name": name,
      "user_email": email,
      "user_subject": subject ?? "",
      "user_message": message,
    };
  }
}
