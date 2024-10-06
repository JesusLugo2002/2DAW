<?php

$conn = mysqli_connect('localhost', 'daw', 'daw', 'tarea6');

$query = "select * from users";
$result = mysqli_query($conn, $query);
$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
print json_encode($rows);

mysqli_close($conn);
