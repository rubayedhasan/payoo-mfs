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
      const updatedBalance = currentBalance + addMoney;
      updateCurrentBalance(updatedBalance);

      // reset input field
      resetFieldValue("input-account-number");
      resetFieldValue("input-account-pin");
      resetFieldValue("input-add-amount");
    } else {
      alert("Wrong Account Number or Pin Number. Try again later");
    }
  });

// submit button:: cashout event handerler
// document
//   .getElementById("btn-cashout")
//   .addEventListener("click", function (event) {
//     // stop from reloading on submit
//     event.preventDefault();

//     // read account number and pin number element
//     const agentNumber = document.getElementById("input-agent-number").value;
//     const cashoutPin = document.getElementById("input-cashout-pin").value;

//     // read balance element
//     const strCurrentBalance =
//       document.getElementById("current-balance").innerText;
//     const strWithdrawMoney = document.getElementById(
//       "input-cashout-amount"
//     ).value;

//     // validation
//     if (agentNumber === "1221" && cashoutPin === "3456") {
//       // const
//     } else {
//       alert("Wrong Agent Number or Pin Number. Try Again Later");
//     }
//     console.log(cashoutPin);
//   });
