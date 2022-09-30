console.log("Hello!  This is your javascript file."); 

var fridge_val = 0;

const fridge_up = document.getElementById('fridge_button');
const fridge_value = document.getElementById('fridge_value');

PopUpWindow()
{
    window.alert("You've unlocked a hidden feature! Nice :D");
};

const HandleFridgeIncrement = () => {
    fridge_val++;
    fridge_up.innerHTML = fridge_val;
};

fridge_up.addEventListener("click", HandleFridgeIncrement);
document.getElementById('secret_button').addEventListener("click", PopUpWindow);