<?php
$conn = mysqli_connect('localhost', 'daw', 'daw', 'prueba');

// $sql = 'UPDATE users SET name = "Susan" WHERE id = 1';
$sql = 'DELETE FROM users WHERE id = 1';
$result = mysqli_query($conn, $sql);

echo "<pre>";
print_r($result);

mysqli_close($conn);