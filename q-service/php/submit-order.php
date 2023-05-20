<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database";

// Создание соединения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
