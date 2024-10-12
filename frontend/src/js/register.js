const passwordBtn = document.getElementById("password-eye");

passwordBtn.addEventListener("click", (e) => {
  const passwordInput = document.getElementById("password");
  const icon = passwordBtn.querySelector("i");
  const isVisible = icon.classList.contains("ri-eye-line");

  // Mengganti tipe input antara 'password' dan 'text'
  passwordInput.type = isVisible ? "password" : "text";

  // Mengganti ikon berdasarkan visibilitas
  icon.setAttribute("class", isVisible ? "ri-eye-off-line" : "ri-eye-line");
});
