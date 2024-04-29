document.title = "CHROME EXTENSION";
let myArr = [];
const inputElm = document.getElementById("input-elm");
const saveBt = document.getElementById("save-bt");
const tabBt = document.getElementById("tab-bt");
const deleteBt = document.getElementById("delete-bt");
const saveElm = document.getElementById("save-elm");

let myLStrorage = JSON.parse(localStorage.getItem("myArr"));

const localStorageToArray = () => {
    myArr = myLStrorage;
}

localStorageToArray()

saveBt.addEventListener("click", inputLead);

function inputLead() {
    if (inputElm.value) {
        myArr.push(inputElm.value);
        console.log(myArr);
    }
    inputElm.value = ""
    localStorage.setItem("myArr", JSON.stringify(myArr));
    readInputItems()
}

function readInputItems() {
    let saveInput = ""
    for (let i = 0; i < myArr.length; i++) {
        saveInput += `<li>${myArr[i]}</li>`
    }
    saveElm.innerHTML = saveInput;
}

deleteBt.addEventListener("dblclick", deleteElms);

function deleteElms() {
    myArr = []
    saveElm.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", readInputItems);