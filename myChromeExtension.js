document.title = "CHROME EXTENSION";
let myArr = [];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const saveEl = document.getElementById("save-el");

saveBtn.addEventListener("click", inputSave);
function inputSave() {
    let input
    if (inputEl.value) {
        saveEl.innerHTML = "";
        myArr.push(inputEl.value);
        console.log(myArr);
        for (let i = 0; i < myArr.length; i++) {
            saveEl.innerHTML += `<li><a href="${myArr[i]}" target="_blank">${myArr[i]}</a></li>`
        }
    }
    inputEl.value = "";
}

deleteBtn.addEventListener("click", deleteElms);

function deleteElms() {
    myArr = [];
    saveEl.innerHTML = "";
}