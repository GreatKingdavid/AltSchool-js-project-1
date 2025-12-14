// This is where I declare what will be my user input variables
// This function is where all validation happens
function validateUser() {
  let userName;
  let userEmail;
  let userPassword;
  let userAge;
  let confirmPassword;

  // This helper function validates the username
  // It checks if the name has at least 2 words and isn't empty
  function validateUserName(name) {
    if (!name || name === "") {
      return false;
    }
    const words = name
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    return words.length >= 2;
  }

  // This helper function validates the email format
  function validateUserEmail(email) {
    if (!email || email === "") {
      return false;
    }
    return (
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") < email.lastIndexOf(".")
    );
  }

  // Checks if password has at least 8 characters
  function hasMinlenght(password) {
    return password.length >= 8;
  }

  // Checks if password contains uppercase letters
  function hasUpperCase(password) {
    return /[A-Z]/.test(password);
  }

  // Checks if password contains numbers
  function hasNumbers(password) {
    return /[0-9]/.test(password);
  }

  // Checks if password contains special characters
  function hasSpecialChar(password) {
    let spaecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    return spaecialChar;
  }

  // Main password validation function
  // Uses all the helper functions to check all requirements
  function validateuserPassword(password) {
    if (!password || password === "") return false;
    return (
      hasMinlenght(password) &&
      hasUpperCase(password) &&
      hasNumbers(password) &&
      hasSpecialChar(password)
    );
  }

  // Validates age by converting to number and checking if 18+
  function validateAge(age) {
    if (!age || age === "") return false;
    let ageNum = Number(age);
    return ageNum >= 18;
  }

  // Confirms password by comparing with original password
  function confirmUserPassword(confirm) {
    if (!confirm || confirm === "") return false;
    return confirm === userPassword;
  }

  // Start username validation loop
  //i used a while loop which will ask for username and keep asking if it's wrong
  while (true) {
    userName = prompt(`Enter Full name`);

    // Check if user cancelled
    if (userName === null) {
      alert("Form canceled");
      return false;
    }

    // If username is valid, break out of loop
    if (validateUserName(userName)) {
      break;
    }

    // Show error message and loop will prompt again
    alert(
      "Invalid Full name. Full name Must not be empty and contain at least 2 words."
    );
  }

  // Email validation loop
  while (true) {
    userEmail = prompt(`Enter your Email`);

    if (userEmail === null) {
      alert("Form canceled");
      return false;
    }

    if (validateUserEmail(userEmail)) {
      break;
    }

    alert(
      "Please enter a valid email! Email must follow a valid email format (e.g. example@domain.com)."
    );
  }

  // Password validation loop
  while (true) {
    userPassword = prompt("Create new password");

    if (userPassword === null) {
      alert("Form canceled");
      return false;
    }

    if (validateuserPassword(userPassword)) {
      break;
    }

    alert(
      `Please password most have at least 8 characters, with one uppercase letter |A-Z|, one number |0-9|, and one special character |!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?|.`
    );
  }

  // Password confirmation loop
  while (true) {
    confirmPassword = prompt(`Confirm your password`);

    if (confirmPassword === null) {
      alert("Form canceled");
      return false;
    }

    if (confirmUserPassword(confirmPassword)) {
      break;
    }

    alert("Not correct. Must match the Password field.");
  }

  // Age validation loop
  while (true) {
    userAge = prompt("How old are you");

    if (userAge === null) {
      alert("Form canceled");
      return false;
    }

    if (validateAge(userAge)) {
      break;
    }

    alert("You must be at least 18 years or older to submit this form");
  }

  // All validations passed
  alert(`Congratulations you are now a valid user`);
}

// this one runs all the validation function we have just did
validateUser();
