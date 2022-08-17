function donate(amountid, inputField) {
  let amountElement = document.getElementById(amountid);
  let amount = amountElement.innerText;
  amount = parseInt(amount);

  let inputValue = document.getElementById(inputField);
  inputValue.value = amount;
}
function activeColor(id) {
  let button = document.getElementById(id);
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("active");
  }, 500);
}

document.getElementById("amount-first").addEventListener("click", function () {
  donate("tk-first", "amount-field");
  activeColor("amount-first");
});

document.getElementById("amount-second").addEventListener("click", function () {
  donate("tk-second", "amount-field");
  activeColor("amount-second");
});

document.getElementById("amount-third").addEventListener("click", function () {
  donate("tk-third", "amount-field");
  activeColor("amount-third");
});

document.getElementById("amount-fourth").addEventListener("click", function () {
  donate("tk-fourth", "amount-field");
  activeColor("amount-fourth");
});

document.getElementById("amount-fifth").addEventListener("click", function () {
  donate("tk-fifth", "amount-field");
  activeColor("amount-fifth");
});

//submit amount

function amountSubmit(id) {
  let input = document.getElementById(id);
  let inputValue = input.value;
  input.value = "";
  if (isNaN(inputValue)) {
    return alert("Please enter valid key");
  } else if (inputValue < 5) {
    return alert("This is too low amount.Please donate minimun 5tk.");
  }
  let msg = document.getElementById("submit-msg");
  msg.innerText = "🤗 Donate Successfully";
  msg.style.border = "1px solid #ddd";

  setTimeout(() => {
    msg.innerText = "";
    msg.style.border = "none";
  }, 1000);
}
document.getElementById("donate-submit").addEventListener("click", function () {
  amountSubmit("amount-field");
});
