const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = document.getElementById("name").value.trim();
  const userEmail = document.getElementById("email").value.trim();
  const userMessage = document.getElementById("message").value.trim();

  if (userName === "" || userEmail === "" || userMessage === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  console.log(userName, userEmail, userMessage);
  alert("Pesan berhasil dikirim");
});
