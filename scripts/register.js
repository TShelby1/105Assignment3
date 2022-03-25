class User {
  constructor(
    firstName,
    lastName,
    email,
    password,
    cardNumber,
    age,
    address,
    phoneNumber,
    payment,
    color
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.cardNumber = cardNumber;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber; //##attention
    this.payment = payment;
    this.color = color;
  }
}

function isValid(user) {
  // return flase when the user is not valid
  //return true when the user is valid
  let valid = true;
  //we need to reset the original appearance of the inputs
  //by removing the input error class
  $("input").removeClass("input-error");
  if (user.email.length == 0) {
    valid = false;
    $("#txtEmail").addClass("input-error");
    setTimeout(function () {
      $("#txtEmail").removeClass("input-error");
    }, 2000);
  }
  if (user.password == 0) {
    valid = false;
    $("#txtPassword").addClass("input-error");
    setTimeout(function () {
      $("#txtPassword").removeClass("input-error");
    }, 2000);
  }

  if (!valid) {
    displayError("Missing data");
  }
  // if (valid) {
  //   alert("Succesful Entry");
  // }
  return valid;
}

function validatePass() {
  //get the values from the form //store the information in a variable
  let txtPass = $("#txtPassword");
  let password = txtPass.val();
  if (password.length < 6) {
    txtPass.css("border", "3px solid red"); //jquery function
    displayError("Error: Password too short");
  } else {
    txtPass.css("border", "3px solid green");
    hiderError();
  }
}
function displayError(msg) {
  $("#alertError").removeClass("hide").text(msg);
}
function hiderError() {
  $("#alertError").addClass("hide");
}
function register() {
  let inputFirstName = $("#txtFirstName").val();
  let inputLastName = $("#txtLastName").val();
  let inputEmail = $("#txtEmail").val();
  let inputPassword = $("#txtPassword").val();
  let inputCardNumber = $("#txtCardNumber").val();
  let inputAge = jQuery("#txtAge").val();
  let inputAddress = $("#txtAddress").val();
  let inputPhoneNumber = $("#txtPhoneNumber").val();
  let inputPayment = $("#txtPayment").val();
  let inputColor = $("#txtColor").val();

  //create theUser
  let theUser = new User(
    inputFirstName,
    inputLastName,
    inputEmail,
    inputPassword,
    inputCardNumber,
    inputAge,
    inputAddress,
    inputPhoneNumber,
    inputPayment,
    inputColor
  );
  //validate the user
  if (isValid(theUser)) {
    saveUser(theUser); //this function is in the store manager
    $("input").val("");
  }

  //clear the inputs
  //   $("input").val(""); not working
}

function login(){
  let inputEmail = $("#txtPassword").val();
  let inputPassword = $("#txtEmail").val();
  let users=readUsers();
  for(let i=0; i<users.length; i++){
    if(users[i].email===inputEmail && users[i].password===inputPassword)
    {
      window.location='user.html';
    }
  }
}

function init() {
  console.log("Registration");
  //hook events
  $(".capture-form #txtPassword").change(validatePass);
}
window.onload = init;
