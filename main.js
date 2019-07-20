

var userName; 
var userName = localStorage.getItem('receivedName');

if (userName == null) {
    userName = "friend";
 }


document.getElementById("settings-button").addEventListener('click', openSettings);

function openSettings() {
    document.getElementById("settings").classList.toggle("settings-open");
}

function saveName() {
    
    localStorage.setItem('receivedName', userName);
}

function changeName() {
    userName = document.getElementById("name-input").value;
    saveName();
    getGreeting();
}

document.getElementById("name-form").addEventListener('submit', (e) => {
    e.preventDefault();

    changeName();
})

function getGreeting() {
    document.getElementById("greeting").innerHTML = `Hello, ${userName}. Enjoy your day!`;
}

getGreeting();
