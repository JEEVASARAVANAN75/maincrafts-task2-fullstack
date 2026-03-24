function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error = document.getElementById("error");

  if (name === "" || email === "" || message === "") {
    error.innerText = "All fields are required!";
    return false;
  }

  if (!email.includes("@")) {
    error.innerText = "Enter a valid email!";
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
