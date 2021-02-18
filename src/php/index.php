<?php
    $name = $_POST["name"];
    $fromEmail = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];
    $toMail = "juansebastianvargasposada@gmail.com";
    $headers = "From: $name Email: $fromEmail";
    
    $mail = mail($toMail , $subject , $comments , $headers);

    if($mail){
        echo json_encode("The data has been sent");
    }else{
        echo json_encode("Failed to send email");
    }   
?>