const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector("#loginButton");
const message = document.querySelector("#message");

const correctUsername = "admin";
const correctPassword = "123456";

function checkLogin(username, password) {
  if (username === "" || password === "") {
    message.textContent =
      "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.";
  } else if (
    username === correctUsername &&
    password === correctPassword
  ) {
    message.textContent = "Đăng nhập thành công!";
  } else {
    message.textContent =
      "Tên đăng nhập hoặc mật khẩu không chính xác.";
  }
}

function handleLogin() {
  const enteredUsername = usernameInput.value.trim();
  const enteredPassword = passwordInput.value;

  checkLogin(enteredUsername, enteredPassword);
}

loginButton.addEventListener("click", handleLogin);