document.title = "CHROME EXTENSION";
let myArr = [];
const inputElm = document.getElementById("input-elm");
const saveBt = document.getElementById("save-bt");
const tabBt = document.getElementById("tab-bt");
const deleteBt = document.getElementById("delete-bt");
const saveElm = document.getElementById("save-elm");
const label = document.querySelector("label");

let myLStrorage = JSON.parse(localStorage.getItem("myArr"));

const localStorageToArray = () => {
    myArr = myLStrorage;
}

let koko = "swsws";

localStorageToArray()

saveBt.addEventListener("click", inputLead);

function inputLead() {
    label.innerHTML = `<audio src="Click_-_Sound_Effect__HD_(128k).mp3" autoplay></audio>`
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
        saveInput += `
            <li>
                <a href="${myArr[i]}" target="_blank">
                    ${myArr[i]}
                </a>
            </li>
            `;
    }
    saveElm.innerHTML = saveInput;
}

deleteBt.addEventListener("dblclick", deleteElms);

function deleteElms() {
    label.innerHTML = `<audio src="Mouse_Click_Sound_Effect(128k).mp3" autoplay></audio>`
    myArr = []
    saveElm.innerHTML = "";
}

tabBt.addEventListener("click", chromeTabsave)
function chromeTabsave() {
    label.innerHTML = `<audio src="Click_-_Sound_Effect__HD_(128k).mp3" autoplay></audio>`
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myArr.push(tabs[0].url);

        inputLead()
    })
}

inputElm.addEventListener("change", function () {
    inputLead()
})

document.addEventListener("DOMContentLoaded", readInputItems);