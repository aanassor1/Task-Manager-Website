function displayErrorText() {
    if (document.getElementById("email-label").value == "") {
        var errorText = document.getElementById("error-text");
        errorText.style.display = "block";
        var emailText = document.getElementById("email-label");
        emailText.value = "Email is not in correct format!";
        emailText.style.color = "red";
    } else {
        window.location = "login.html";
    }
}