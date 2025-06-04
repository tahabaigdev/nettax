<?php
// Handle CORS
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed_origin = 'https://www.nettax.org/';

if ($origin === $allowed_origin) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: $allowed_origin");
}

header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Preflight support
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// DB connection
$host = 'localhost';
$username = 'tahayjjb_nettax-admin';
$password = 'A:&7@WrZ72grd';
$database = 'tahayjjb_nettax';

$conn = new mysqli($host, $username, $password, $database);
$conn->set_charset("utf8mb4");

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed."]);
    exit;
}

// Required fields
$requiredFields = ['fullname', 'email', 'query'];
foreach ($requiredFields as $field) {
    if (empty($_POST[$field])) {
        http_response_code(400);
        echo json_encode(["error" => "Missing required field: $field"]);
        exit;
    }
}

// Sanitize inputs
$fullname = trim($_POST['fullname']);
$email = trim($_POST['email']);
$query = trim($_POST['query']);
$topics = isset($_POST['topics']) && is_array($_POST['topics'])
    ? implode(', ', array_map('trim', $_POST['topics']))
    : 'None selected';

// Insert query
$stmt = $conn->prepare("INSERT INTO contacts (fullname, email, query, topics) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $fullname, $email, $query, $topics);

if ($stmt->execute()) {
    http_response_code(200);
    echo json_encode(["message" => "Form submitted successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
