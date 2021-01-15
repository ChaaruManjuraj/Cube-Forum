<?php

    include_once 'dbh.php';

    $uid = $_POST['uid'];
    $title = $_POST['postTitle'];
    $content = $_POST['postContent'];
    $tag = $_POST['postTag'];

    $sql = "INSERT INTO `POSTS`(`uid`, `ptitle`, `ptag`, `pcontent`) VALUES ('$uid','$title','$tag','$content');";
    $ins = mysqli_query($conn, $sql);

    if($ins) {
        echo "data_insertion_successful";
    }

    else {
        echo mysqli_error($conn);
    }

?>