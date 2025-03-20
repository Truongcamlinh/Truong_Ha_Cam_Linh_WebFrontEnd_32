function validateEmail() {
    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("message");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
        message.textContent = "Email hợp lệ!";
        message.className = "valid";
    } else {
        message.textContent = "Email không hợp lệ!";
        message.className = "invalid";
    }
}