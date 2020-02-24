function myFunction() {
  var checkbox = document.getElementById("toggleInput");
  var emailContainer = document.getElementById("emailContainer");
  var smsContainer = document.getElementById("smsContainer");

  if (checkbox.checked == true) {
    emailContainer.style.display = "none";
    smsContainer.style.display = "block";
  } else {
    emailContainer.style.display = "block";
    smsContainer.style.display = "none";
  }
}
