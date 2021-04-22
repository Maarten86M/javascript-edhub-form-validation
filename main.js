
// sla de referentie op naar de input
const inputField = document.getElementById('username');
const passwordField = document.getElementById('password');

// sla de referentie op naar de warning message. // Dus selecteer het element waar het staat.
const warningField = document.getElementById('form-warning');
const warningFieldPass = document.getElementById('form-warning-pass');

// voeg eventlisteners toe op de inputvelden.
inputField.addEventListener('keyup', emailCheck);// de funtie wordt aangeroepen als er iets gebeurd.
passwordField.addEventListener("keyup", passwordCheck); // de funtie wordt aangeroepen als er iets gebeurd.


// functie voor de gebruikersnaam.

function emailCheck(e){

    if (e.target.value.includes("@")){
        warningField.textContent = "gebruikersnaam mag geen @ bevatten";
    } else {
        warningField.textContent = '';
    }
}

// functie voor de wachtwoordcheck.

function passwordCheck(e){
    if (e.target.value === '' || e.target.value.length > 6) {
        warningFieldPass.textContent = '';
    }else {
        warningFieldPass.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens";
    }
}