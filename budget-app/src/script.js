document.getElementById("income-section").addEventListener("click", () => {
  let newIncome;

  do {
    newIncome = parseInt(prompt("Type your Income"), 10);
  } while (newIncome.innerHtml === undefined);
  document.getElementById("income").innerText = `$ ${newIncome}`;
  console.log(newIncome.innerText);
});
