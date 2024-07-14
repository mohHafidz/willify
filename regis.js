document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    let isValid = true;
    let errorMessage = "";

    // Validate username
    if (username.length < 8) {
        isValid = false;
        errorMessage = "Username must be at least 8 characters long.";
        document.getElementById("usernameError").textContent = errorMessage;
        document.getElementById("username").parentNode.classList.add("error");
    } else {
        document.getElementById("usernameError").textContent = "";
        document.getElementById("username").parentNode.classList.remove("error");
    }

    // Validate email
    if (!email.endsWith("@gmail.com")) {
        isValid = false;
        errorMessage = "Email must end with @gmail.com.";
        document.getElementById("emailError").textContent = errorMessage;
        document.getElementById("email").parentNode.classList.add("error");
    } else {
        document.getElementById("emailError").textContent = "";
        document.getElementById("email").parentNode.classList.remove("error");
    }

    // Validate password
    const passwordRegex = /^(?=.*\d).{10,}$/;
    if (!passwordRegex.test(password)) {
        isValid = false;
        errorMessage = "Password must be at least 10 characters long and contain at least one number.";
        document.getElementById("passwordError").textContent = errorMessage;
        document.getElementById("password").parentNode.classList.add("error");
    } else {
        document.getElementById("passwordError").textContent = "";
        document.getElementById("password").parentNode.classList.remove("error");
    }

    // Validate age
    if (age === "" || age < 1) {
        isValid = false;
        errorMessage = "Age must be specified and greater than 0.";
        document.getElementById("ageError").textContent = errorMessage;
        document.getElementById("age").parentNode.classList.add("error");
    } else {
        document.getElementById("ageError").textContent = "";
        document.getElementById("age").parentNode.classList.remove("error");
    }

    // Validate gender
    if (gender === "") {
        isValid = false;
        errorMessage = "Gender must be selected.";
        document.getElementById("genderError").textContent = errorMessage;
        document.getElementById("gender").parentNode.classList.add("error");
    } else {
        document.getElementById("genderError").textContent = "";
        document.getElementById("gender").parentNode.classList.remove("error");
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // Here you can add the code to submit the form data to the server
    }
});