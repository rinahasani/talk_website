function selectDoctor() {
  var doctor = document.getElementById("doctor");

  // If the selected doctor 1, display her profile picture
  if (doctor.value == "doctor 1") {
    document.getElementById("profile").src = "images/doctor1.png";
    // If the selected doctor 2, display her profile picture
  } else if (doctor.value == "doctor 2") {
    document.getElementById("profile").src = "images/doctor2.png";
    // If the selected doctor 3, display her profile picture
  } else if (doctor.value == "doctor 3") {
    document.getElementById("profile").src = "images/doctor3.png";
  }
}

// this validates the form if all fields are filled out
function validateForm() {
  var doctor = document.getElementById("doctor").value;
  var service = document.getElementById("service").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time");

  // If any of the fields are empty, display an alert
  if (
    name == "" ||
    email == "" ||
    phone == "" ||
    date == "" ||
    time.value == "" ||
    beautician == "" ||
    service == ""
  ) {
    alert("Please fill out all fields");
    // If the time is not between 9am and 7pm, display an alert
  } else {
    if (time.value < 9 || time.value > 19) {
      alert("We are open all the time!");
      // If all fields are filled out, display a confirmation message
    } else {
      alert("Thank you for booking with us!");
      document.getElementById("reservation").innerHTML =
        "Reservation for " +
        name +
        " with " +
        doctor +
        " for " +
        service +
        " on " +
        date +
        " at " +
        time.value +
        ":00";
    }
  }
}