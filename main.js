

// Observacion: Cree dos codigos para la consigna uno para "Iniciar sesion" y otro para "Crear la Cuenta de usuario":
// -Ambos estan con comentario se puede descomentar el "Sign In" y luego el "Create Account".


/**************** Iniciar Sesion*************************** */


// Form "Sign in"


// function signIn() {
//     let email = prompt("Enter your email address:");

//     while (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
//         alert("Incorrect email. Make sure to include '@' and '.com'.");
//         email = prompt("IEnter your email address:");
//     }

//     let password = prompt("Enter your password:(6 numbers):");

//     while (isNaN(password) || password.length !== 6) {
//         alert("Incorrect password. Make sure to enter 6 numbers.");
//         password = prompt("Enter your password (6 numbers):");
//     }

//     alert("Welcome! You have successfully logged in.");
// }

// signIn();


/**************** Crear Cuenta *************************** */

// Form "Create Account"

function validateEmail(email) {
    return email.includes("@") && email.includes(".com");
}

function validatePassword(password) {
    return password.length === 6 && !isNaN(password);
}

function containsOnlyLetters(text) {
    for (let i = 0; i < text.length; i++) {
        let character = text[i].toLowerCase();
        if (character < 'a' || character > 'z') {
            return false;
        }
    }
    return true;
}

function createAccount() {
    let name;
    let lastName;
    let email;
    let password;

    do {
        name = prompt("Enter your name:");

        if (!containsOnlyLetters(name)) {
            alert("Invalid name. It must contain only letters.");
        }
    } while (!containsOnlyLetters(name));

    do {
        lastName = prompt("Enter your last name:");

        if (!containsOnlyLetters(lastName)) {
            alert("Invalid last name. It must contain only letters.");
        }
    } while (!containsOnlyLetters(lastName));

    do {
        email = prompt("Enter your email address:");

        if (!validateEmail(email)) {
            alert("Email is not valid. It must contain '@' and '.com'.");
        }
    } while (!validateEmail(email));

    do {
        password = prompt("Enter your password (6 numbers):");

        if (!validatePassword(password)) {
            alert("Invalid password. It must contain exactly 6 numbers..");
        }
    } while (!validatePassword(password));

    alert("¡User account created successfully. Welcome!!! \n\nName: " + name + " " + lastName + "\nEmail: " + email);
}

createAccount();
