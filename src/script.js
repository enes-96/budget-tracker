let income = 0;
let expenses = 0;
let balance = 0;
const purhcaseName = document.getElementById("purchase-name");
const purchasePrice = document.getElementById("purchase-price");
const expensesOutput = document.getElementById("expenses");

// eslint-disable-next-line func-names
const calcBalance = function () {
  balance = income - expenses;
  document.getElementById("balance").innerText = balance;
};
// eslint-disable-next-line func-names
const toggleModal = function () {
  document.getElementById("overlay").classList.toggle("hidden");
  document.getElementById("modal").classList.toggle("hidden");
};
// eslint-disable-next-line func-names
const editItems = function () {
  document.querySelectorAll("#createdItem").forEach((item) => {
    item.addEventListener("click", () => {
      const itemPrice = item.querySelector("p");
      console.log(itemPrice.innerText);
      expenses -= itemPrice.innerText;
      expensesOutput.innerText = expenses;
      item.remove();
    });
    calcBalance();
  });
};
// eslint-disable-next-line func-names
const newPurchase = function (name, price) {
  const nameOutput = document.createElement("h4");
  const priceOutput = document.createElement("p");
  const purchaseList = document.getElementById("purchase-list");
  const newItemWrapper = document.createElement("li");
  newItemWrapper.setAttribute("id", "createdItem");
  newItemWrapper.classList.add(
    "flex",
    "items-center",
    "rounded-md",
    "justify-between",
    // eslint-disable-next-line comma-dangle
    "p-2"
  );
  purchaseList.appendChild(newItemWrapper);
  newItemWrapper.appendChild(nameOutput);
  newItemWrapper.appendChild(priceOutput);
  nameOutput.innerText = name;
  priceOutput.innerText = `${price} `;
};

document
  .getElementById("add-icon")
  .addEventListener("click", () => toggleModal());

document
  .getElementById("close-icon")
  .addEventListener("click", () => toggleModal());

document.getElementById("income-section").addEventListener("click", () => {
  const incomeDisplay = document.getElementById("income");
  do {
    // eslint-disable-next-line no-alert
    income = parseInt(prompt("type you income"), 10);
    // eslint-disable-next-line no-restricted-globals
  } while (isNaN(income));
  incomeDisplay.innerText = `${income}`;
  calcBalance();
});

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  // eslint-disable-next-line no-alert
  if (!purhcaseName.value) return alert("type the price");
  // eslint-disable-next-line no-alert
  if (!purchasePrice.value) return alert("type the price");

  expenses += parseInt(purchasePrice.value, 10);
  expensesOutput.innerText = expenses;
  // add a new purchase
  newPurchase(purhcaseName.value, purchasePrice.value);
  editItems();
  calcBalance();
  toggleModal();
});
