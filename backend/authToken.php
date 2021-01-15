<?php

    include_once 'dbh.php';
    session_start();

    $uid = $_POST["uid"];
    $email = $_POST["email"];

    $stamp = $email . time();

    $token = hash('sha256', $stamp);

    $sql = "INSERT INTO `AUTH_TOKEN`(`uid`, `token`) VALUES ('$uid','$token');";
    $ins = mysqli_query($conn, $sql);

    if($ins) 
        echo $token;

    else
        echo "Couldn't insert the token";



?>