function emailValidate(email) {
  var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (expression.test(email.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

function nameValidate(name) {
  if (name == null || name.length == 0) {
    return false;
  } else {
    return true;
  }
}

function passwordValidate(password) {
  return password.length >= 8;
}

const validate = (firstName, secondName, email, password) => {
  const errorMessages = [];

  if (!emailValidate(email)) {
    errorMessages.push("The email format is incorrect");
  }

  if (!nameValidate(firstName)) {
    errorMessages.push("First name is required");
  }
  if (!nameValidate(secondName)) {
    errorMessages.push("Second name is required");
  }

  if (!passwordValidate(password)) {
    errorMessages.push("The password must have at least 8 characters");
  }

  return errorMessages.join(", \n ");
};

module.exports = { validate };
