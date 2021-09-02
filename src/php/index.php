<?php
    $name = $_POST["name"];
    $from = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];
    $to = "juansebastianvargasposada@gmail.com";
    $headers = 'From: ' . $from . "\r\n" .
    'Reply-To: ' . $to . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    
    $mail = mail($to , $subject , $comments , $headers);

    if($mail){
        echo json_encode("The data has been sent");
    }else{
        echo json_encode("Failed to send email");
    }   
?>