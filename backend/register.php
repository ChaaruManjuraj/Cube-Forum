<?php

    include_once 'dbh.php';

    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $DOB = $_POST['DOB'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $phno = $_POST['phno'];

    // hashing
    $password = md5($password);

    $sql = "INSERT INTO `USER`(`fName`, `lName`, `DOB`, `email`, `password`, `phno`) VALUES ('$fName','$lName','$DOB','$email','$password','$phno');";
    $ins = mysqli_query($conn, $sql);

    if($ins) {
        echo "data_insertion_successful";
    }
    else {
        echo mysqli_error($conn);
    }

?>