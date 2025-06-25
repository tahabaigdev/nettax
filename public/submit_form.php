<?php
header("Access-Control-Allow-Origin: *"); // For development — limit in production
header("Content-Type: application/json");

// Database credentials
$host = "localhost";
$dbname = "tahayjjb_nettax"; // ✅ replace this
$username = "tahayjjb_nettax-admin";     // ✅ replace this
$password = "A:&7@WrZ72grd"; // ✅ replace this

// Create DB connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["message" => "Database connection failed"]);
  exit;
}

// Parse input
$fullname = $_POST['fullname'] ?? '';
$email = $_POST['email'] ?? '';
$query = $_POST['query'] ?? '';
$topics = $_POST['topics'] ?? '';
$submitted_at = date("Y-m-d H:i:s");

// Prepare SQL query
$stmt = $conn->prepare("INSERT INTO your_table_name (fullname, email, query, topics, submitted_at) VALUES (?, ?, ?, ?, ?)"); // ✅ change `your_table_name`
$stmt->bind_param("sssss", $fullname, $email, $query, $topics, $submitted_at);

if ($stmt->execute()) {
  echo json_encode(["message" => "Form submitted successfully"]);
} else {
  http_response_code(500);
  echo json_encode(["message" => "Database insert failed"]);
}

$stmt->close();
$conn->close();
