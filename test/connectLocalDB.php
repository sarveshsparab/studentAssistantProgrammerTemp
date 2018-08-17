<?php
$addr="localhost";
$username="root";
$password="toortoor";
$db="studentAssisProgDB";

// Create connection
$conn = new mysqli($addr, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>