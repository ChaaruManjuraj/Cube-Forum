<?php

    include_once 'dbh.php';

    $token = $_POST["token"];

    $sql = "SELECT * FROM AUTH_TOKEN WHERE token='$token';";
    $ins = mysqli_query($conn, $sql);
    // $row = mysqli_fetch_array($ins, MYSQLI_ASSOC);
    $count = mysqli_num_rows($ins);

    if($count == 1) {
        echo "auth_token_verified";
    }

    else {
        echo "auth_token_not_verified";
    }

?>