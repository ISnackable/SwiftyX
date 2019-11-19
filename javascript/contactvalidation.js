// Load init() on window.load
window.onload = init;

function init() {
  // Attach "onsubmit" handler
  document.getElementById("contactForm").onsubmit = validateContactForm;
}

/* Variable declaration */
var username = document.getElementById("username");
var email = document.getElementById("email");
var comment = document.getElementById("comment");

/* Function to check if form is valid when clicked */
function validateContactForm() {
    var status = false;
    if ((/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(username.value.trim()) && username.value.trim().length !== 0) == false) { // Check is name is all letters
        username.classList.add('invalidInput');
        username.classList.remove('validInput');
        document.getElementById("invalid-username").innerHTML = " Enter your name.";
        status = false;
    }
    else {
      username.classList.add('validInput');
      username.classList.remove('invalidInput');
      document.getElementById("invalid-username").innerHTML = "";
        status = true;
    }

    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value) == false) {
      email.classList.add('invalidInput');
      email.classList.remove('validInput');  
      document.getElementById("invalid-email").innerHTML = " Enter your email address.";
      status = false;
    }
    else {
      email.classList.add('validInput');
      email.classList.remove('invalidInput');
      document.getElementById("invalid-email").innerHTML = "";
    }

    if((comment.value.trim().length !== 0) == false){
        comment.classList.add('invalidInput');
        comment.classList.remove('validInput');
        document.getElementById("invalid-comment").innerHTML = " You cannot leave this blank!";
        status = false;
    }
    else {
      comment.classList.add('validInput');
      comment.classList.remove('invalidInput');
      document.getElementById("invalid-comment").innerHTML = "";
    }

    return status;
}

// Check if name is valid in real time
username.oninput = function(){
    if((/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(username.value.trim()) && username.value.trim().length !== 0)  == false) {
        document.getElementsByClassName("invalidIcon")[0].style.color= "red";
        document.getElementsByClassName("invalidIcon")[0].innerHTML= "<i class=\"fas fa-times\"></i>";
      }
      else {
        document.getElementsByClassName("invalidIcon")[0].style.color= "green";
        document.getElementsByClassName("invalidIcon")[0].innerHTML= "<i class=\"fas fa-check\"></i>";
        document.getElementById("invalid-username").innerHTML = ""; // Remove invalid text when it's correct
      }
      username.classList.remove('validInput');
      username.classList.remove('invalidInput');
}

// Check if email is valid in real time
email.oninput = function(){
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value.trim())  == false) { // Check if email is in the correct format according to the internet standard
        document.getElementsByClassName("invalidIcon")[1].style.color= "red";
        document.getElementsByClassName("invalidIcon")[1].innerHTML= "<i class=\"fas fa-times\"></i>";
      }
      else {
        document.getElementsByClassName("invalidIcon")[1].style.color= "green";
        document.getElementsByClassName("invalidIcon")[1].innerHTML= "<i class=\"fas fa-check\"></i>";
        document.getElementById("invalid-email").innerHTML = ""; // Remove invalid text when it's correct
      }
      email.classList.remove('validInput');
      email.classList.remove('invalidInput');
}

// Check if comment is valid in real time
comment.oninput = function(){
    if((comment.value.trim().length !== 0)  == false) { // Make sure if comment is not empty.
        document.getElementsByClassName("invalidIcon")[2].style.color= "red";
        document.getElementsByClassName("invalidIcon")[2].innerHTML= "<i class=\"fas fa-times\"></i>";
      }
      else {
        document.getElementsByClassName("invalidIcon")[2].style.color= "green";
        document.getElementsByClassName("invalidIcon")[2].innerHTML= "<i class=\"fas fa-check\"></i>";
        document.getElementById("invalid-comment").innerHTML = ""; // Remove invalid text when it's correct
      }
      comment.classList.remove('validInput');
      comment.classList.remove('invalidInput');
}