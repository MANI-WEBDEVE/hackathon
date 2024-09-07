
console.log("hello world!");

const productData: DataType[] = [];

interface DataType {
  name: string;
  qulaity: string;
  price: string;
}

let inputOneData = document.getElementsByClassName(
  "input1"
) as HTMLCollectionOf<HTMLInputElement>;
let inputTwoData = document.getElementsByClassName(
  "input2"
) as HTMLCollectionOf<HTMLInputElement>;
let inputThreeData = document.getElementsByClassName(
  "input3"
) as HTMLCollectionOf<HTMLInputElement>;
let button = document.querySelector(".btn") as HTMLElement;

const tableRow = document.createElement("tr");

const allInputData = (e: Event): void => {
  e.preventDefault(); 

  // Retrieve values from input elements
  const inputOneValue = inputOneData[0].value;
  const inputTwoValue = inputTwoData[0].value;
  const inputThreeValue = inputThreeData[0].value;

  const inputAllData: DataType = {
    name: inputOneValue,
    qulaity: inputThreeValue,
    price: inputTwoValue,
  };

  productData.push(inputAllData);
};

const appendData = () => {
  productData.map((item) => {
    const tableRow = document.createElement("tr");

    const cellOne = document.createElement("td");
    cellOne.textContent = item.name;
    const cellTwo = document.createElement("td");
    cellTwo.textContent = item.qulaity;
    const cellThree = document.createElement("td");
    cellThree.textContent = item.price;

    tableRow.appendChild(cellOne);
    tableRow.appendChild(cellTwo);
    tableRow.appendChild(cellThree);
    const tableBody = document.querySelector(
      ".productTable"
    ) as HTMLTableSectionElement;
    if (tableBody) {
      tableBody.appendChild(tableRow);
    } else {
      console.error("Table body not found");
    }
  });
};

button.addEventListener("click", allInputData);
button.addEventListener("click", appendData);
