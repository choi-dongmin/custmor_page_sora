<?php

  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $email_from=""; // NOTE: 서버를 사용중인 사용자 홈페이지 주소*******
  $email_subject = "Title : $subject";
  $email_body="User Name : $name.\n"
              "User Email : $visitor_email.\n"
              "Message : $message.\n";
  $to = "cdm5212@naver.com"; // NOTE: 받는이 이메일

  $headers = "From : $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to, $email_subject, $email_body, $headers);

  header("Location : contact.html");
?>
