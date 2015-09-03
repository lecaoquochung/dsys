<?php
$servername = "27.142.134.36";
$username = "Db.client";
$password = "ddnb.info";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
