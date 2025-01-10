const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const submitButton = document.getElementById('sub');
const username = document.getElementById('username');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  
  
  if (
    username.value.length < 3 ||
    subject.value.length < 5 ||
    message.value.length < 10 ||
    !validateEmail(email.value) 
  ) {
    alert("Not allowed: Please check your inputs!");
  } else {
    alert("Submission successful!");
  }
});