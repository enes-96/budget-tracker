let myList = [];

let income = 0;
let expenses = 0;

const calcBalance = function () {
  const balance = income - expenses;
  document.getElementById("balance").innerText = balance;
};

//  function to toggle modal
const toggleModal = function () {
  document.getElementById("overlay").classList.toggle("hidden");
  document.getElementById("modal").classList.toggle("hidden");
};

//  select the plus icon in the footer and add click event for modal
document
  .getElementById("add-icon")
  .addEventListener("click", () => toggleModal());

// select the x icon in the modal to close
document
  .getElementById("close-icon")
  .addEventListener("click", () => toggleModal());

// select the income box and add click event to type your income
document.getElementById("income-section").addEventListener("click", () => {
  const incomeDisplay = document.getElementById("income");
  //  ask for income again if its not a number
  do {
    // eslint-disable-next-line no-alert
    income = parseInt(prompt("type you income"), 10);
    // eslint-disable-next-line no-restricted-globals
  } while (isNaN(income));
  incomeDisplay.innerText = `$ ${income}`;
  calcBalance();
});

// blueprint for new purchase
const newPurchase = function (name, price) {
  const nameOutput = document.createElement("p");
  const priceOutput = document.createElement("p");
  const newItemWrapper = document.createElement("li");
  newItemWrapper.addEventListener("click", () => {
    toggleModal();
  });
  const purchaseList = document.getElementById("purchase-list");
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
  priceOutput.innerText = `$ ${price} `;
};

document.getElementById("submit").addEventListener("click", (event) => {
  // prevent reloading
  event.preventDefault();
  // select user input
  const purhcaseName = document.getElementById("purchase-name");
  const purchasePrice = document.getElementById("purchase-price");
  expenses += parseInt(purchasePrice.value, 10);
  document.getElementById("expenses").innerText = `$ ${expenses}`;
  // add a new purchase
  const addPurchase = newPurchase(
    purhcaseName.value,
    // eslint-disable-next-line comma-dangle
    purchasePrice.value
  );

  myList.push(addPurchase);
  calcBalance();
  // close the modal
  toggleModal();
  myList = [];
});
