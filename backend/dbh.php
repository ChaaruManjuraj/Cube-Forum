<?php

    $dbServerName = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "Cube_Forum";

    $conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

    if(!$conn) 
        echo "Connection failed!";

?>