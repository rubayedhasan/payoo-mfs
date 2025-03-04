// login event
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    // to stop page reloading on form submit
    event.preventDefault();

    // get mobile number
    const mobileNumberField = document.getElementById("input-mobile-number");
    const mobileNumber = mobileNumberField.value;

    // get pin number
    const pinNumberField = document.getElementById("input-pin-number");
    const pinNumber = pinNumberField.value;

    // user mobile and pin validation
    if (mobileNumber === "017" && pinNumber === "1234") {
      // switch one page to another
      window.location.href = "./home.html";

      // switch one html page to another html page on a new tab
      // window.open("./home.html");
      // window.open("./home.html", "_blank");

      // reset user input
      mobileNumberField.value = "";
      pinNumberField.value = "";
    } else {
      alert("Wrong Mobile Number or Pin Number. Please try again later!");
    }
  });
