function displayErrorText() {
    if (document.getElementById("email-form-label").value == "" || document.getElementById("password-form-label").value == "") {
        var errorText = document.getElementById("error-text");
        errorText.style.display = "block";
    } else {
        window.location = "hub.html";
    }
}