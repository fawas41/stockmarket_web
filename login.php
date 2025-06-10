<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();
require 'src/database.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST["email"]);
    $password = $_POST["password"];

    $stmt = $conn->prepare("SELECT id, name, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($id, $name, $hashed_password);
        $stmt->fetch();

        if (password_verify($password, $hashed_password)) {
            $_SESSION['user'] = $name;
            header("Location: home.php");
            exit;
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "No user found.";
    }

    $stmt->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>TrackVest</title>
</head>
<body>
    <div class="container">
        <div class="header">
            <button class="theme-toggle" id="themeToggle">&#9788;</button>
        </div>

        <div class="logo-container">
            <div class="logo">
                <img src="Assets/Images/WhatsApp Image 2025-05-16 at 19.07.48_c81669d4.jpg" alt="TrackVest Logo">
            </div>
        </div>

        <h1>Before you continue</h1>
        <p>Confirm a few details about your finances to help us comply with regulations</p>

        <div class="social-buttons">
            <button class="social-button">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg>
                <span style="margin-left: 5px;">Facebook</span>
            </button>
            <button class="social-button">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#EA4335" d="M5.26 9.76c0-.75.27-1.4.81-1.94a2.7 2.7 0 0 1 1.95-.81c.75 0 1.4.27 1.94.81s.81 1.19.81 1.94c0 .74-.27 1.39-.81 1.93a2.7 2.7 0 0 1-1.94.82c-.75 0-1.4-.28-1.95-.82a2.65 2.65 0 0 1-.81-1.93Z"/><path fill="#FBBC05" d="M12 12.03v2.86h3.98c-.17 1.11-.63 1.99-1.39 2.64a5.95 5.95 0 0 1-2.59.85c-1.07 0-2.03-.36-2.88-1.06a5.61 5.61 0 0 1-1.74-2.58 5.32 5.32 0 0 1 0-3.39c.35-1.1.96-2 1.74-2.58a4.93 4.93 0 0 1 2.88-1.06c1.07 0 2.03.36 2.88 1.06l2.03-2.03A7.98 7.98 0 0 0 12 4.21a7.95 7.95 0 0 0-5.74 2.37A7.95 7.95 0 0 0 4 12.03c0 2.12.71 3.93 2.13 5.42s3.19 2.25 5.37 2.25c2.15 0 3.94-.67 5.34-2.05 1.4-1.38 2.12-3.21 2.16-5.47a8.9 8.9 0 0 0-.12-2.15H12Z"/><path fill="#4285F4" d="M19 12.06h-7v2.86h3.98c-.17 1.11-.63 1.99-1.39 2.64 1.01.76 2.21 1.14 3.58 1.14 2.15 0 3.94-.67 5.34-2.05-1.4 1.38-3.19 2.05-5.34 2.05-2.18 0-3.96-.77-5.37-2.25"/>
                <path fill="#34A853" d="M6.07 14.91a5.62 5.62 0 0 1-.81-2.94c0-1.06.27-2.04.81-2.94-.54.9-.81 1.88-.81 2.94 0 1.07.27 2.04.81 2.94ZM12 19.7c-2.18 0-3.96-.77-5.37-2.25a4.93 4.93 0 0 1-2.88-1.06c.85.7 1.81 1.06 2.88 1.06a5.95 5.95 0 0 0 2.59-.85c-.57-.42-1.03-.97-1.39-1.64h3.98c.76.65 1.22 1.53 1.39 2.64-1.01.73-2.21 1.1-3.58 1.1Z"/></svg>
                <span style="margin-left: 5px;">Google</span>
            </button>
        </div>

        <div class="divider">Or</div>
        <form method="POST" action="login.php" >

        <div class="input-group">
            <input type="text" placeholder="Email/Phone Number" name="email">
        </div>

        <div class="input-group password-field">
            <input type="password" placeholder="Password" name="password">
            <button class="password-toggle">&#128065;</button>
        </div>
        <br>
        <br>
        <button class="login-button" type="submit">Log In</button>
        </form>

        
        <div class="bottom-links">
            <a href="signup.php">Don't have account? Sign up</a>
            <!-- <a href="#">Use Password</a> -->
        </div>

        <div class="pagination">
            <div class="page-indicator"></div>
            <div class="page-indicator active"></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>