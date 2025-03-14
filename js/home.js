// logout event handeler
document.getElementById("btn-logout").addEventListener("click", function () {
  window.location.href = "./index.html";
});

/*
-------------------common function to get Element value---------
*/

// get user input value
function getInputFieldStrValue(fieldId) {
  const fieldStrValue = document.getElementById(fieldId).value;

  return fieldStrValue;
}

// get current balance
function getCurrentBalance() {
  const currentBalanceStrValue =
    document.getElementById("current-balance").innerText;
  const currentBalanceNumValue = parseFloat(currentBalanceStrValue);

  return currentBalanceNumValue;
}

// get input amount
function getInputAmount(inputAmountId) {
  const inputAmountStrValue = document.getElementById(inputAmountId).value;
  // const inputAmountNumValue = parseFloat(inputAmountStrValue);
  const inputAmountNumValue = Number(inputAmountStrValue);

  return inputAmountNumValue;
}

// set or update  current balance
function updateCurrentBalance(updatedValue) {
  document.getElementById("current-balance").innerText = updatedValue;
}

// reset input field value
function resetFieldValue(inputId) {
  document.getElementById(inputId).value = "";
}

// submit button::add money event handeler
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // stop form default loading on submit
    event.preventDefault();

    // get account number & pin number
    const accountNumber = getInputFieldStrValue("input-account-number");
    const accountPinNumber = getInputFieldStrValue("input-account-pin");

    // validation
    if (accountNumber === "1221" && accountPinNumber === "3456") {
      // get balance
      const currentBalance = getCurrentBalance();
      const addMoney = getInputAmount("input-add-amount");

      // upadate blance and set it
      const updatedBalanceAfterAddMoney = currentBalance + addMoney;
      updateCurrentBalance(updatedBalanceAfterAddMoney);

      // reset input field
      resetFieldValue("input-account-number");
      resetFieldValue("input-account-pin");
      resetFieldValue("input-add-amount");
    } else {
      alert("Wrong Account Number or Pin Number. Try again later");
    }
  });

// submit button:: cashout event handerler
document
  .getElementById("btn-cashout")
  .addEventListener("click", function (event) {
    // stop from reloading on submit
    event.preventDefault();

    // get account number and pin number element
    const agentNumber = getInputFieldStrValue("input-agent-number");
    const cashoutPin = getInputFieldStrValue("input-cashout-pin");

    // validation
    if (agentNumber === "1221" && cashoutPin === "3456") {
      // get balance
      const currentBalance = getCurrentBalance();
      const cashoutMoney = getInputAmount("input-cashout-amount");

      // update balance and set it
      const updatedBalanceAfterCashout = currentBalance - cashoutMoney;
      updateCurrentBalance(updatedBalanceAfterCashout);

      // reset input field
      resetFieldValue("input-agent-number");
      resetFieldValue("input-cashout-pin");
      resetFieldValue("input-cashout-amount");
    } else {
      alert("Wrong Agent Number or Pin Number. Try Again Later");
    }
  });

// submit button:: transfer money event handeler
document
  .getElementById("btn-transfer-Money")
  .addEventListener("click", function (event) {
    // stop page reloding on submitting form
    event.preventDefault();

    // get User Account Number & Pin Number
    const userAccountNumber = getInputFieldStrValue(
      "input-user-account-number"
    );
    const userPinNumber = getInputFieldStrValue("input-user-pin");

    // validation
    if (userAccountNumber === "1221" && userPinNumber === "3456") {
      // get balance
      const currentBalance = getCurrentBalance();
      const amountOfTransferMoney = getInputAmount("input-transfer-amount");

      // update balance and set it
      const updateBalanceAterTransfer = currentBalance - amountOfTransferMoney;
      updateCurrentBalance(updateBalanceAterTransfer);

      // reset input field
      resetFieldValue("input-user-account-number");
      resetFieldValue("input-user-pin");
      resetFieldValue("input-transfer-amount");
    } else {
      alert("Wrong user Account or Pin. Try Again Later..!");
    }
  });

// submit button:: get bonus event handeler
let bonusCount = 0;
document
  .getElementById("btn-get-bouns")
  .addEventListener("click", function (event) {
    // stop page reloading when submitting form
    event.preventDefault();

    const cuponCode = getInputFieldStrValue("input-enter-cupon");

    if (cuponCode.toLowerCase() === "program25") {
      //validation:: get bonus only one time
      if (bonusCount >= 1) {
        return alert("You have get bonus Once, not any more");
      }

      // get balance
      const currentBalance = getCurrentBalance();
      const bonus = 500;

      // update balance and set it
      const updatedBalanceAfterGettingBonus = currentBalance + bonus;
      updateCurrentBalance(updatedBalanceAfterGettingBonus);

      // reset input field
      resetFieldValue("input-enter-cupon");

      bonusCount++;
    } else {
      alert("Enter valid Cupon..!");
    }
  });

// submit button:: pay bill event handeler
document
  .getElementById("btn-pay-bill")
  .addEventListener("click", function (event) {
    // stop page reloding on submitting form
    event.preventDefault();

    // get biller account number and pin number
    const billerAccountNumber = getInputFieldStrValue(
      "input-biller-account-number"
    );
    const billerPinNumber = getInputFieldStrValue("input-biller-account-pin");

    // validation
    if (billerAccountNumber === "1221" && billerPinNumber === "3456") {
      // get balance
      const currentBalance = getCurrentBalance();
      const yourBill = getInputAmount("input-amount-to-pay");

      // update alance and set it
      const updatedBalanceAfterPayment = currentBalance - yourBill;
      updateCurrentBalance(updatedBalanceAfterPayment);

      // reset input field
      resetFieldValue("input-biller-account-number");
      resetFieldValue("input-biller-account-pin");
      resetFieldValue("input-amount-to-pay");
    } else {
      alert("Wrong Account Number or Pin Number. Try Again Later.");
    }
  });

/*------- common function for use action event handeler ----------*/
function hideElement(targetElementId) {
  document.getElementById(targetElementId).classList.add("hidden");
}

function showElement(targetElementId) {
  document.getElementById(targetElementId).classList.remove("hidden");
}

// user action:: add money event handeler
document
  .getElementById("user-action-add-money")
  .addEventListener("click", function (event) {
    // show element
    showElement("add-money-action-form");
    // scroll automaticly to show section
    document
      .getElementById("add-money-action-form")
      .scrollIntoView({ block: "center", behavior: "smooth" });

    hideElement("cashout-action-form");
    hideElement("transfer-money-action-form");
    hideElement("get-bonus-action-form");
    hideElement("pay-bill-action-form");
  });

// user action:: cashout event handeler
document
  .getElementById("user-action-cashout")
  .addEventListener("click", function (event) {
    showElement("cashout-action-form");
    document
      .getElementById("cashout-action-form")
      .scrollIntoView({ block: "center", behavior: "smooth" });

    hideElement("add-money-action-form");
    hideElement("transfer-money-action-form");
    hideElement("get-bonus-action-form");
    hideElement("pay-bill-action-form");
  });

// user action:: transfer money event handeler
document
  .getElementById("user-action-transfer-money")
  .addEventListener("click", function (event) {
    showElement("transfer-money-action-form");
    document
      .getElementById("transfer-money-action-form")
      .scrollIntoView({ block: "center", behavior: "smooth" });

    hideElement("add-money-action-form");
    hideElement("cashout-action-form");
    hideElement("get-bonus-action-form");
    hideElement("pay-bill-action-form");
  });

// user action:: get bonus event handeler
document
  .getElementById("user-action-get-bonus")
  .addEventListener("click", function (event) {
    showElement("get-bonus-action-form");
    document
      .getElementById("get-bonus-action-form")
      .scrollIntoView({ block: "center", behavior: "smooth" });

    hideElement("add-money-action-form");
    hideElement("cashout-action-form");
    hideElement("transfer-money-action-form");
    hideElement("pay-bill-action-form");
  });

// user action:: pay bill event handeler
document
  .getElementById("user-action-pay-bill")
  .addEventListener("click", function (event) {
    showElement("pay-bill-action-form");
    document
      .getElementById("pay-bill-action-form")
      .scrollIntoView({ block: "center", behavior: "smooth" });

    hideElement("add-money-action-form");
    hideElement("cashout-action-form");
    hideElement("transfer-money-action-form");
    hideElement("get-bonus-action-form");
  });

// user action:: transactions event handeler
document
  .getElementById("user-action-transactions")
  .addEventListener("click", function (event) {
    document
      .getElementById("latest-payment")
      .scrollIntoView({ block: "center", behavior: "smooth" });
    hideElement("cashout-action-form");
    hideElement("add-money-action-form");
    hideElement("transfer-money-action-form");
    hideElement("get-bonus-action-form");
    hideElement("pay-bill-action-form");
  });
