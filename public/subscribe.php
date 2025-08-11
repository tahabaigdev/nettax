<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

ini_set('display_errors', 1);
error_reporting(E_ALL);

// DB config
$host = "localhost";
$dbname = "tahayjjb_nettax";
$username = "tahayjjb_nettax-admin";
$password = "A:&7@WrZ72grd";

// Connect
$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
  echo json_encode(["message" => "❌ Database connection failed"]);
  exit;
}

// ✅ Decode JSON
$input = json_decode(file_get_contents("php://input"), true);
$email = $input['email'] ?? '';
$country = $input['country'] ?? '';
$subscribed_at = date("Y-m-d H:i:s");

if (!$email || !$country) {
  echo json_encode(["message" => "❌ Missing fields"]);
  exit;
}

// Insert
$stmt = $conn->prepare("INSERT INTO subscribers (email, country, subscribed_at) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $email, $country, $subscribed_at);

if ($stmt->execute()) {
  // ✅ Email
  $to = $email;
  $subject = "Thank You for Subscribing!";
  $headers = "From: Nettax <no-reply@nettax.org>\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  $message = "
    <html>
      <body>
        <h2>Thank you for subscribing!</h2>
        <p>We’re glad to have you with us. Stay tuned for updates from Nettax.</p>
        <p>Country: <strong>$country</strong></p>
        <br />
        <p>Regards,<br />Nettax Team</p>
      </body>
    </html>
  ";

  mail($to, $subject, $message, $headers);

  echo json_encode(["message" => "✅ You are subscribed successfully!"]);
} else {
  echo json_encode(["message" => "❌ Subscription failed: " . $stmt->error]);
}

$stmt->close();
$conn->close();
