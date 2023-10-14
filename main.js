

// Observacion: Cree dos codigos para la consigna uno para "Iniciar sesion" y otro para "Crear la Cuenta de suario":
// -Ambos estan con comentario se puede descomentar el "Sign In" y luego el "Create Account"


/**************** Iniciar Sesion*************************** */


// Form "Sign in"


// function iniciarSesion() {
//     let email = prompt("Ingrese su correo electrónico:");

//     while (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
//         alert("Correo electrónico incorrecto. Asegúrate de incluir '@' y '.com'.");
//         email = prompt("Ingrese su correo electrónico:");
//     }

//     let password = prompt("Ingrese su contraseña (6 números):");

//     while (isNaN(password) || password.length !== 6) {
//         alert("Contraseña incorrecta. Asegúrese de ingresar 6 números.");
//         password = prompt("Ingrese su contraseña (6 números):");
//     }

//     alert("¡Bienvenido! Ha iniciado sesión con éxito.");
// }

// iniciarSesion();


/**************** Crear Cuenta *************************** */

// Form "Create Account"

// function validarCorreo(email) {
//     return email.includes("@") && email.includes(".com");
// }

// function validarContrasena(password) {
//     return password.length === 6 && !isNaN(password);
// }

// function contieneSoloLetras(texto) {
//     for (var i = 0; i < texto.length; i++) {
//         var caracter = texto[i].toLowerCase();
//         if (caracter < 'a' || caracter > 'z') {
//             return false;
//         }
//     }
//     return true;
// }

// function crearCuenta() {
//     var nombre;
//     var apellido;
//     var email;
//     var password;

//     do {
//         nombre = prompt("Ingrese su nombre:");

//         if (!contieneSoloLetras(nombre)) {
//             alert("Nombre no válido. Debe contener solo letras.");
//         }
//     } while (!contieneSoloLetras(nombre));

//     do {
//         apellido = prompt("Ingrese su apellido:");

//         if (!contieneSoloLetras(apellido)) {
//             alert("Apellido no válido. Debe contener solo letras.");
//         }
//     } while (!contieneSoloLetras(apellido));

//     do {
//         email = prompt("Ingrese su correo electrónico:");

//         if (!validarCorreo(email)) {
//             alert("Correo electrónico no válido. Debe contener '@' y '.com'.");
//         }
//     } while (!validarCorreo(email));

//     do {
//         password = prompt("Ingrese su contraseña (6 números):");

//         if (!validarContrasena(password)) {
//             alert("Contraseña no válida. Debe contener exactamente 6 números.");
//         }
//     } while (!validarContrasena(password));

//     alert("¡Cuenta de usuario creada con éxito. Bienvenido!!! \n\nNombre: " + nombre + " " + apellido + "\nCorreo electrónico: " + email);
// }

// crearCuenta();
