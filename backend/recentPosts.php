<?php

    include_once 'dbh.php';

    $sql = "SELECT P.uid, P.pid, P.ptitle, P.ptag, P.pcontent, U.fName, U.lName from POSTS P, USER U WHERE U.uid = P.uid LIMIT 5;";
    $ins = mysqli_query($conn, $sql);
    $count = mysqli_num_rows($ins);

    while ($row = mysqli_fetch_assoc($ins)) {
        $result[] = $row;
    }

    if($ins) {
        if($count != 0) {
            echo json_encode($result, JSON_PRETTY_PRINT);
        }
        else {
            echo "no_posts_found";
        }
    }
    else {
        echo mysqli_error($conn);
    }

?>