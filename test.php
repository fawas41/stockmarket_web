<?php
require 'env.php';

$host =  $_ENV['DB_HOST'];
$db_user = $_ENV['DB_USER'];
$db_pass = $_ENV['DB_PASS'];
$db_name = $_ENV['DB_NAME'];

$conn = new mysqli($host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    printf("connection error bro");
    die("Connection failed: " . $conn->connect_error);
}
printf("success");
?>
