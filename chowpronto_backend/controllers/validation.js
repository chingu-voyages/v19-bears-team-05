const emailValidate = (email) => {
  var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return expression.test(email.toLowerCase());
};

const phoneValidate = (phone) => {
  const expression = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  return expression.test(phone);
};

const nameValidate = (name) => {
  return !name || name.length < 2 ? false : true;
};

const addressValidate = (address) => {
  return !address || address.length < 10 ? false : true;
};

const postcodeValidate = (postcode) => {
  return !postcode || postcode.length < 5 ? false : true;
};

const passwordValidate = (password) => {
  return password.length >= 8;
};

const validateDeliveryData = (name, email, phone, address, postcode) => {
  const errorMessages = [];

  if (!nameValidate(name)) {
    errorMessages.push("Name is required");
  }

  if (!emailValidate(email)) {
    errorMessages.push("The email format is incorrect");
  }

  if (!phoneValidate(phone)) {
    errorMessages.push(
      "Phone number should be \n +XX-XXXX-XXXX \n +XX.XXXX.XXXX \n +XX XXXX XXXX"
    );
  }

  if (!addressValidate(address)) {
    errorMessages.push("Address is required");
  }

  if (!postcodeValidate(postcode)) {
    errorMessages.push("Please provide valid postcode");
  }

  return errorMessages.join(", \n ");
};

const validate = (name, email, phone, address, postcode, password, role) => {
  const errorMessages = [];
  errorMessages.push(
    validateDeliveryData(name, email, phone, address, postcode)
  );
  if (role === "REGISTER" && !passwordValidate(password)) {
    errorMessages.push("The password must have at least 8 characters");
  }
  return errorMessages.join(", \n ");
};

module.exports = { validate, validateDeliveryData };
