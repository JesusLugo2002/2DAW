<?php
echo "<pre>";

$conn = mysqli_connect('localhost', 'daw', 'daw', 'prueba');

$insert = "insert into users(name, email) values('Jesus', 'Jesus@hotmail.com')";
$return = mysqli_query($conn, $insert);

print_r($return);

mysqli_close($conn);