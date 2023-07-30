function displayErrorText() {
    if (document.getElementById("email-form-label").value == "") {
        var emailText = document.getElementById("text-above-button");
        emailText.innerHTML = "Email is not in correct format!";
        emailText.style.color = "red";
    } else {
        var emailText = document.getElementById("text-above-button");
        emailText.innerHTML = "Please check your emails for a reset password email.";
        emailText.style.color = "black";
    }
    
}