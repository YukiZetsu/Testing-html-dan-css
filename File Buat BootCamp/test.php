<?php
// Contoh sederhana proses login menggunakan PHP
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Periksa username dan password (ini hanya contoh sederhana)
    if ($username === 'admin' && $password === 'password123') {
        echo "Login berhasil! Selamat datang, $username.";
    } else {
        echo "Username atau password salah!";
    }
}
?>
