<?php
echo "Esta es la página #2!";

header("location: página-3.php?name=" . $_GET['name']);
?>