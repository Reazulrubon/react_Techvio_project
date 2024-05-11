<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'techvilo');

$title = $_POST['title'];
$content = $_POST['content'];
$btn = $_POST['btn'];
$id = $_POST['id'];


$target_dir = "../image/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo = $_FILES["photo"]["name"];
    $query = "update blog set  photo='$photo',title='$title', content='$content',btn='$btn' where id=$id";
} else {
    $query = "update blog set title='$title', content='$content',btn='$btn' where id=$id";
}

if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}