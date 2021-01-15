<?php

    include_once 'dbh.php';
    session_start();

    $email = $_POST['email'];
    $password = $_POST['password'];

    // hashing
    $password = md5($password);

    $sql = "SELECT * FROM USER WHERE email='$email';";
    $ins = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($ins, MYSQLI_ASSOC);
    $count = mysqli_num_rows($ins);
    if($count != 0) {
        $sql1 = "SELECT * FROM USER WHERE email='$email' && password='$password';";
        $ins1 = mysqli_query($conn, $sql1);
        $row1 = mysqli_fetch_array($ins1, MYSQLI_ASSOC);
        $count1 = mysqli_num_rows($ins1);

        if($count1 != 0) {
            $_SESSION["email"] = $email;
            $_SESSION["uid"] = $row["uid"];
            echo json_encode($row, JSON_PRETTY_PRINT);
        }
        else {
            echo "pass_didnt_match";
        }
    }
    else {
        echo "email_didnt_match";
    }

?>