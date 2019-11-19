/* Remove cart button */
function removedCart(e, item) {
    alert("Removed from cart!"); // Window.alert "Remove from cart!"
    $("."+e).remove(); // Remove the cart item
    $("."+item).remove
    document.getElementById('pricesArea').style.overflow = "visible";
    document.getElementById('pricesArea').style.height = "100%";
    document.getElementById('pricesArea').style.position = "relative";
}


// Disable form submissions if there are invalid fields
/* Form validation */
window.onload = init; // Loads init() on load.

/* Variable Declaration */
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var billingAddress = document.getElementById("address");
var billingAddress2 = document.getElementById("address2");
var billingCountry = document.getElementById("country");
var billingState = document.getElementById("state");
var billingZip = document.getElementById("zip");
var shippingAddress = document.getElementById("shipaddress");
var shippingAddress2 = document.getElementById("shipaddress2");
var shippingCountry = document.getElementById("shipcountry");
var shippingState = document.getElementById("shipstate");
var shippingZip = document.getElementById("shipzip");
var creditCardName = document.getElementById("cc-name");
var creditCardNumber = document.getElementById("cc-number");
var creditCardExpiration = document.getElementById("cc-expiration");
var creditCardCvv = document.getElementById("cc-cvv");

// The "onload" handler. Run after the page is fully loaded.
function init() {
  // Attach "onsubmit" handler
  document.getElementById("myForm").onsubmit = validateForm;
  // Set initial focus
  document.getElementById("firstName").focus();
}

/* If all of these are true, then form is validated. */
function validateForm() {
  var status = false;
  billingAddress2.classList.add('validInput');
  shippingAddress2.classList.add('validInput');
  if(isLetters(firstName, "invalidfirstName", "Please enter your first name, alphabetical only.") == false) {
    status = false;
  }
  else {
    status = true;
  }
  if(isLetters(lastName, "invalidlastName", "Please enter your last name, alphabetical only.") == false) {
    status = false;
  }
  else {
  }
  if(isValidEmail(email, "invalidemail", "Please enter a valid e-mail address.") == false) {
    status = false;
  }
  else {
  }
  if(isNotEmpty(billingAddress, "invalidaddress", "Please enter your billing address.") == false) {
    status = false;
  }
  else {
  }
  if(selected(billingCountry, "invalidcountry", "Please select your billing country.") == false) {
    status = false;
  }
  else {
  }
  if(isLetters(billingState, "invalidstate", "Please select your billing state, alphabetical only.") == false) {
    status = false;
  }
  else {
  }
  if(isNumber(billingZip, "invalidzip", "Please select your billing zip code.") == false) {
    status = false;
  }
  else {
  }
  if(isNotEmpty(shippingAddress, "invalidshipaddress", "Please enter your shipping address.") == false) {
    status = false;
  }
  else {
  }
  if(selected(shippingCountry, "invalidshipcountry", "Please enter your shipping country.") == false) {
    status = false;
  }
  else {
  }
  if(isLetters(shippingState, "invalidshipstate", "Please enter your shipping state, alphabetical only.") == false) {
    status = false;
  }
  else {
  }
  if(isNumber(shippingZip, "invalidshipzip", "Please enter your shipping zip code.") == false) {
    status = false;
  }
  else {
  }
  if(isLetters(creditCardName, "invalidcc-name", "Please enter your credit card name, alphabetical only.") == false) {
    status = false;
  }
  else {
  }
  if(verifyCreditCard(creditCardNumber, "invalidcc-number", "The card number should be 16 digits!") == false) {
    status = false;
  }
  else {
  }
  if(verifyExpYear(creditCardExpiration, "invalidcc-expiration", "The expire date format is mm/yy.") == false) { // NEED CHANGE
    status = false;
  }
  else {
  }
  if(verifyCVV(creditCardCvv, "invalidcc-cvv", "Please enter a valid cvv.") == false) {
    status = false;
  }
  else {
  }

  return status;
}

// Return true if the input value is not empty and is has no numbers
function isLetters(inputId, errorId, errorMessage) {
  var inputValue = inputId.value.trim();
  var isValid = ((/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(inputValue) && inputValue.length !== 0));  // boolean
  if(isValid == false) {
    inputId.classList.add('invalidInput');
    inputId.classList.remove('validInput');
    document.getElementById(errorId).innerHTML = errorMessage;
  }
  else {
    inputId.classList.add('validInput');
    inputId.classList.remove('invalidInput');
    document.getElementById(errorId).innerHTML = "";
  }
  return isValid;
}


// Return true if the input value is not empty
function isNotEmpty(inputId, errorId, errorMessage) {
  var inputValue = inputId.value.trim();
  var isValid = (inputValue.length !== 0);  // boolean
  if(isValid == false) {
    inputId.classList.add('invalidInput');
    inputId.classList.remove('validInput');
    document.getElementById(errorId).innerHTML = errorMessage;
  }
  else {
    inputId.classList.add('validInput');
    inputId.classList.remove('invalidInput');
    document.getElementById(errorId).innerHTML = "";
  }
  return isValid;
}

// Return true if the input value is not empty, has @ and .
function isValidEmail(inputId, errorId, errorMessage) {
  var inputValue = inputId.value.trim();
  var isValid = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputValue));
  if(isValid == false) {
    inputId.classList.add('invalidInput');
    inputId.classList.remove('validInput');
    document.getElementById(errorId).innerHTML = errorMessage;
  }
  else {
    inputId.classList.add('validInput');
    inputId.classList.remove('invalidInput');
    document.getElementById(errorId).innerHTML = "";
  }
  return isValid;
}

// Return true if the value is less than -1
function selected(inputId, errorId, errorMessage) {
    var inputValue = inputId.value.trim();
    var isValid = (inputValue != "");  // boolean
    if(isValid == false) {
      inputId.classList.add('invalidInput');
      inputId.classList.remove('validInput');
      document.getElementById(errorId).innerHTML = errorMessage;
    }
    else {
      inputId.classList.add('validInput');
      inputId.classList.remove('invalidInput');
      document.getElementById(errorId).innerHTML = "";
    }
    return isValid;
}

// Return true if the value is all numbers
function isNumber(inputId, errorId, errorMessage) {
  var inputValue = inputId.value.trim();
  var isValid = (/^[0-9]+$/.test(inputValue));  // boolean
  if(isValid == false) {
    inputId.classList.add('invalidInput');
    inputId.classList.remove('validInput');
    document.getElementById(errorId).innerHTML = errorMessage;
  }
  else {
    inputId.classList.add('validInput');
    inputId.classList.remove('invalidInput');
    document.getElementById(errorId).innerHTML = "";
  }
  return isValid;
}
// Return true if the input value is number and has the pattern: nnnn-nnnn-nnnn-nnnn
function verifyCreditCard(inputId, errorId, errorMessage) {
  var inputValue = inputId.value.trim();
  var isValid = (/^(\d{4}[- ]){3}\d{4}|\d{16}$/.test(inputValue))
  if(isValid == false) {
    inputId.classList.add('invalidInput');
    inputId.classList.remove('validInput');
    document.getElementById(errorId).innerHTML = errorMessage;
  }
  else {
    inputId.classList.add('validInput');
    inputId.classList.remove('invalidInput');
    document.getElementById(errorId).innerHTML = "";
  }
  return isValid;
}

// Return true if the input value is a number and equals to this year and beyond (Fomart mm/yy)
function verifyExpYear(inputId, errorId, errorMessage) {
  var inputValue = inputId.value.trim();
  // get current year and month
  var d = new Date();
  var currentYear = d.getFullYear();
  var currentMonth = d.getMonth() + 1;
  // get parts of the expiration date
  var parts = inputValue.split('/');
  var month = parseInt(parts[0], 10); // If the string begins with any other value, the radix is 10 (decimal)
  var year = parseInt(parts[1], 10) + 2000;
  // compare the dates
  if(!inputValue.match(/(0[1-9]|1[0-2])[/][0-9]{2}/)){
    document.getElementById(errorId).innerHTML = errorMessage;
    inputId.classList.add('invalidInput');
    inputId.classList.remove('validInput');
    var isValid = false;
  } else {
    if (year < currentYear || (year == currentYear && month < currentMonth)) {
      document.getElementById(errorId).innerHTML = errorMessage;
      inputId.classList.add('invalidInput');
      inputId.classList.remove('validInput');
      var isValid = false;
    }
    else {
      inputId.classList.add('validInput');
      inputId.classList.remove('invalidInput');
      var isValid = true;
    }
  }

  return isValid;
}

// Return true if the input value is 3 digit
function verifyCVV(inputId, errorId, errorMessage) {
  var inputValue = inputId.value.trim();
  var isValid = (/^\d{3}$/.test(inputValue))
  if(isValid == false) {
    inputId.classList.add('invalidInput');
    inputId.classList.remove('validInput');
    document.getElementById(errorId).innerHTML = errorMessage;
  }
  else {
    inputId.classList.add('validInput');
    inputId.classList.remove('invalidInput');
    document.getElementById(errorId).innerHTML = "";
  }
  return isValid;
}

// Check the checkbox 'sameadr'. If it is checked, then put the billing fields of Address, City, State, Zip into the shipping fields of Address, City, State, Zip
function sameAddress() 
{ 
  if (document.getElementById('same-address').checked) 
  { 
    document.getElementById('shipaddress').value = document.getElementById('address').value; 
    document.getElementById('shipaddress2').value = document.getElementById('address2').value; 
    document.getElementById('shipcountry').value = document.getElementById('country').value; 
    document.getElementById('shipstate').value = document.getElementById('state').value;
    document.getElementById('shipzip').value = document.getElementById('zip').value;
    return true;
    
  } 
  else
  { 
    document.getElementById('shipaddress').value = "";
    document.getElementById('shipaddress2').value = "";
    document.getElementById('shipcountry').value = "";
    document.getElementById('shipstate').value = "";
    document.getElementById('shipzip').value = "";
    return false;
  } 
}

/* Responsive Checkmark / Cross mark | Parameters are, inputID, invalidText, index of which inputs */
firstName.addEventListener("input", function() {
  checkRealTime(firstName, "invalidfirstName", 0)
});
lastName.addEventListener("input", function() {
  checkRealTime(lastName, "invalidlastName", 1)
});
email.addEventListener("input", function() {
  checkRealTime(email, "invalidemail", 2)
});
billingAddress.addEventListener("input", function() {
  checkRealTime(billingAddress, "invalidaddress", 3)
});
billingCountry.addEventListener("change", function() {
  checkRealTime(billingCountry, "invalidcountry", 4)
});
billingState.addEventListener("input", function() {
  checkRealTime(billingState, "invalidstate", 5)
});
billingZip.addEventListener("input", function() {
  checkRealTime(billingZip, "invalidzip", 6)
});
shippingAddress.addEventListener("input", function() {
  checkRealTime(shippingAddress, "invalidshipaddress", 7)
});
shippingCountry.addEventListener("change", function() {
  checkRealTime(shippingCountry, "invalidshipcountry", 8)
});
shippingState.addEventListener("input", function() {
  checkRealTime(shippingState, "invalidshipstate", 9)
});
shippingZip.addEventListener("input", function() {
  checkRealTime(shippingZip, "invalidshipzip", 10)
});
creditCardName.addEventListener("input", function() {
  checkRealTime(creditCardName, "invalidcc-name", 11)
});
creditCardNumber.addEventListener("input", function() {
  checkRealTime(creditCardNumber, "invalidcc-number", 12)
});
creditCardExpiration.addEventListener("input", function() {
  checkRealTime(creditCardExpiration, "invalidcc-expiration", 13)
});
creditCardCvv.addEventListener("input", function() {
  checkRealTime(creditCardCvv, "invalidcc-cvv", 14)
});

/* Function to check if input is valid in real time */
function checkRealTime(inputId, errorId, index) {
  // firstName, lastName, billingState, shippingState, creditCardName check if it is letters
  if(inputId == firstName || inputId == lastName || inputId == billingState || inputId == shippingState || inputId == creditCardName) {
    if((/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(inputId.value.trim()) && inputId.value.trim().length !== 0) == false) {
      document.getElementsByClassName("invalidIcon")[index].style.color= "red";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-times\"></i>";
    }
    else {
      document.getElementById(errorId).innerHTML= "";
      document.getElementsByClassName("invalidIcon")[index].style.color= "green";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-check\"></i>";
    }
  }

  // Email check if it is a email
  if(inputId == email) {
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputId.value.trim()) == false) {
      document.getElementsByClassName("invalidIcon")[index].style.color= "red";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-times\"></i>";
    }
    else {
      document.getElementById(errorId).innerHTML= "";
      document.getElementsByClassName("invalidIcon")[index].style.color= "green";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-check\"></i>";
    }
  }

  // billingAddress, shippingAddress check if it is empty
  if(inputId == billingAddress || inputId == shippingAddress) {
    if((inputId.value.trim().length !== 0) == false) {
      document.getElementsByClassName("invalidIcon")[index].style.color= "red";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-times\"></i>";
    }
    else {
      document.getElementById(errorId).innerHTML= "";
      document.getElementsByClassName("invalidIcon")[index].style.color= "green";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-check\"></i>";
    }
  }

  // billingCountry, shippingCountry, check if has selected other country
  if(inputId == billingCountry || inputId == shippingCountry) {
    document.getElementById(errorId).innerHTML= "";
  }

  // billingZip, shippingZip check if it's numbers
  if(inputId == billingZip || inputId == shippingZip) {
    if((/^[0-9]+$/.test(inputId.value.trim())) == false) {
      document.getElementsByClassName("invalidIcon")[index].style.color= "red";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-times\"></i>";
    }
    else {
      document.getElementById(errorId).innerHTML= "";
      document.getElementsByClassName("invalidIcon")[index].style.color= "green";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-check\"></i>";
    }
  }

  // creditCardNumber check if it's > 16 Digits
  if(inputId == creditCardNumber) {
    if((/^(\d{4}[- ]){3}\d{4}|\d{16}$/.test(inputId.value.trim())) == false) {
      document.getElementsByClassName("invalidIcon")[index].style.color= "red";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-times\"></i>";
    }
    else {
      document.getElementById(errorId).innerHTML= "";
      document.getElementsByClassName("invalidIcon")[index].style.color= "green";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-check\"></i>";
    }
  }

  // creditCardExpiration check if it is in the mm/yy format and mm < 12 and yy >= currentYear
  if(inputId == creditCardExpiration) {
    if(verifyExpYear(creditCardExpiration, "invalidcc-expiration", null) == false) {
      document.getElementsByClassName("invalidIcon")[index].style.color= "red";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-times\"></i>";
    }
    else {
      document.getElementById(errorId).innerHTML= "";
      document.getElementsByClassName("invalidIcon")[index].style.color= "green";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-check\"></i>";
    }
  }

  // creditCardCvv check if it is 3 digit
  if(inputId == creditCardCvv) {
    if(/^\d{3}$/.test(inputId.value.trim()) == false) {
      document.getElementsByClassName("invalidIcon")[index].style.color= "red";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-times\"></i>";
    }
    else {
      document.getElementById(errorId).innerHTML= "";
      document.getElementsByClassName("invalidIcon")[index].style.color= "green";
      document.getElementsByClassName("invalidIcon")[index].innerHTML= "<i class=\"fas fa-check\"></i>";
    }
  }

  inputId.classList.remove('validInput'); // Remove green border
  inputId.classList.remove('invalidInput'); // Remove red border
}