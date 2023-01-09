let income = 0;
let myList = [];

const toggleModal = function toggleNewPurchaseModal() {
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
  console.log(income);
});

// blueprint for new purchase
const newPurchase = function (name, category, price) {
  return [name, category, price];
};

document.getElementById("submit").addEventListener("click", (event) => {
  // prevent reloading
  event.preventDefault();
  // select user input
  const purhcaseName = document.getElementById("purchase-name");
  const purchasePrice = document.getElementById("purchase-price");
  // add a new purchase
  const addPurchase = newPurchase(
    purhcaseName.value,
    "coming soon",
    // eslint-disable-next-line comma-dangle
    purchasePrice.value
  );
  myList.push(addPurchase);
  console.log(myList);
  myList = [];

  // close the modal
  toggleModal();
});
