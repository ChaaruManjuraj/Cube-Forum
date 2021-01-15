<?php

    include_once 'dbh.php';

    $uid = $_POST['uid'];

    $sql = "SELECT COUNT(ptitle) FROM POSTS WHERE uid='$uid';";
    $ins = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($ins, MYSQLI_ASSOC);

    if($ins) {
        echo json_encode($row, JSON_PRETTY_PRINT);
    }
    else {
        echo mysqli_error($conn);
    }

?>