<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Show errors (for dev only)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// DB credentials
$host = "localhost";
$dbname = "tahayjjb_nettax"; // ✅ replace this
$username = "tahayjjb_nettax-admin";     // ✅ replace this
$password = "A:&7@WrZ72grd"; // ✅ replace this

// Connect to DB
$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
  echo json_encode(["message" => "Database connection failed"]);
  exit;
}

// Read data
$email = $_POST['email'] ?? '';
$country = $_POST['country'] ?? '';
$subscribed_at = date("Y-m-d H:i:s");

// Validate
if (!$email || !$country) {
  echo json_encode(["message" => "Missing fields"]);
  exit;
}

// Insert into DB
$stmt = $conn->prepare("INSERT INTO subscribers (email, country, subscribed_at) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $email, $country, $subscribed_at);

if ($stmt->execute()) {
  // ✅ Send thank-you email
  $to = $email;
  $subject = "Thank You for Subscribing!";
  $headers = "From: Nettax <no-reply@nettax.org>\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  $message = "
    <html>
      <body>
        <h2>Thank you for subscribing!</h2>
        <p>We're glad to have you with us. Stay tuned for updates from Nettax.</p>
        <p>Country: <strong>$country</strong></p>
        <br />
        <p>Regards,<br />Nettax Team</p>
      </body>
    </html>
  ";

  mail($to, $subject, $message, $headers);

  echo json_encode(["message" => "You are subscribed successfully!"]);
} else {
  echo json_encode(["message" => "Subscription failed."]);
}

$stmt->close();
$conn->close();
