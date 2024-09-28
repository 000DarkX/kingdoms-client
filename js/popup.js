// script.js
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}
  
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function msgPopup(msg) {
    document.getElementById("popup-msg").innerHTML = msg;
    openPopup();
}