// JavaScript untuk melakukan validasi login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form di-submit

    // Ambil nilai input username dan password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Contoh validasi sederhana
    if (username === "admin" && password === "password123") {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Login berhasil! Selamat datang, " + username + ".";
    } else {
        document.getElementById("message").innerText = "Username atau password salah!";
    }
});
