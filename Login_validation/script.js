function validation (){
  var email = document.f1.email.value
  var password = document.f1.password.value

  var emailError = document.querySelector("#email_error");
  var passwordError = document.querySelector("#password_error");

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/

  emailError.innerHTML = "";
  passwordError.innerHTML = "";

  if (email == ""){
    emailError.innerHTML = "Email Can't be empty";
    emailError.style.color = "red"
    return false;
  }
  if(!email_pattern.test(email)){
    emailError.innerHTML = "This email is not valid"
    emailError.style.color = "red";return false;
  }

  if(password == ""){
    passwordError.innerHTML = "Enter password "
    passwordError.style.color = "red"
    return false
  }
  if (!password_pattern.test(password)) {
    passwordError.innerHTML = "Enter a valid password (8–16 chars, uppercase, lowercase, number, special character)";
    passwordError.style.color = "red";
    return false;
  }
  return true;
}