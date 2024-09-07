console.log("hello world!");
var productData = [];
var inputOneData = document.getElementsByClassName("input1");
var inputTwoData = document.getElementsByClassName("input2");
var inputThreeData = document.getElementsByClassName("input3");
var button = document.querySelector(".btn");
var tableRow = document.createElement("tr");
var allInputData = function (e) {
    e.preventDefault();
    // Retrieve values from input elements
    var inputOneValue = inputOneData[0].value;
    var inputTwoValue = inputTwoData[0].value;
    var inputThreeValue = inputThreeData[0].value;
    var inputAllData = {
        name: inputOneValue,
        qulaity: inputThreeValue,
        price: inputTwoValue,
    };
    productData.push(inputAllData);
};
var appendData = function () {
    productData.map(function (item) {
        var tableRow = document.createElement("tr");
        var cellOne = document.createElement("td");
        cellOne.textContent = item.name;
        var cellTwo = document.createElement("td");
        cellTwo.textContent = item.qulaity;
        var cellThree = document.createElement("td");
        cellThree.textContent = item.price;
        tableRow.appendChild(cellOne);
        tableRow.appendChild(cellTwo);
        tableRow.appendChild(cellThree);
        var tableBody = document.querySelector(".productTable");
        if (tableBody) {
            tableBody.appendChild(tableRow);
        }
        else {
            console.error("Table body not found");
        }
    });
};
button.addEventListener("click", allInputData);
button.addEventListener("click", appendData);
