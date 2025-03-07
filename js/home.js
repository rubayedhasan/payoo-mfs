// logout event handeler
document.getElementById("btn-logout").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// user action:: add money event handeler
document
  .getElementById("user-action-add-money")
  .addEventListener("click", function (e) {
    console.log("add");
  });

// button::add money event handeler
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // stop form default loading on submit
    event.preventDefault();

    // read account number & pin number
    const accountNumber = document.getElementById("input-account-number").value;
    const accountPinNumber = document.getElementById("input-account-pin").value;

    // read current amount & add money amount
    const strCurrentBalance =
      document.getElementById("current-balance").innerText;
    const strAddMoney = document.getElementById("input-add-amount").value;

    // validation
    if (accountNumber === "1221" && accountPinNumber === "3456") {
      const numCurrentBalance = parseFloat(strCurrentBalance);
      const numAddMoney = parseFloat(strAddMoney);

      const updatedBalance = numCurrentBalance + numAddMoney;

      document.getElementById("current-balance").innerText = updatedBalance;

      // reset input
      document.getElementById("input-account-number").value = "";
      document.getElementById("input-account-pin").value = "";
      document.getElementById("input-add-amount").value = "";
    } else {
      alert("Wrong Account Number or Pin Number. Try again later");
    }
  });
