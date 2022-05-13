<?php
     $email   = $_POST["email"];
     $to      = 'keyrhangarnier@gmail.com';
     $subject = 'Contact - Portfolio';
     $nom    = $_POST["name"];
     $message = $_POST["message"];
     $headers = "From: $nom <$email>\r\nReply-to : $nom <$email>\nX-Mailer:PHP/". phpversion();

     mail($to, $subject, $message, $headers);
 ?>