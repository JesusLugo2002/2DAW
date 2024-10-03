<?php
$conn = mysqli_connect('localhost', 'daw', 'daw', 'prueba');

$sql = "SELECT id, name, email, created_at FROM users";
$result = mysqli_query($conn, $sql);
$rows = mysqli_fetch_array($result, MYSQLI_ASSOC);

do {
    $data[] = $rows;
} while ($rows = mysqli_fetch_array($result, MYSQLI_ASSOC));

echo "<pre>";
print_r($data);

mysqli_close($conn);