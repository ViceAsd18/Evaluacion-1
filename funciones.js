const { useDebugValue } = require("react");

var usuarios = [
    {
        "nombre":"admin",
        "email":"admin@duoc.cl",
        "contraseña":"@Admin123"
    }
];


function validarEmail(){
    const email = document.getElementById("email").value;
    let regex = /^[a-zA-Z0-9._-]+@duoc\.cl$/;
    //[a-zA-Z0-9._-] validar masyuculas, minusculas , numeros y carecteres
    // + @ validar que tenga el arroba
    // duoc valida si es de la intitucion
    // .cl el domininio debe ser si o si .cl
    if (regex.test(email)) {
        alert("Su email es totalmete valido")
        return true;  
    } else {
        alert("su email no es valido")
        return false;  
    }

}
function validarContraseña(){
    const password = document.getElementById("contraseña").value;    
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%])[A-Za-z\d@#$%]{8,}$/;
    //?=.*[a-z] al menos una letra minuscula
    //(?=.*[A-Z] al menos una mayuscula
    //(?=.*\d) al menos 1 numero 
    // ?=.*[@#$%] al menos uno de estos caracteres [@#$%]
    //A-Za-z\d@#$%]{8,} solo permite 8 letras tomanso todo lo anterior

    if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres");
    return false;
    } else if (!/[A-Z]/.test(password)) {
          alert("La contraseña debe contener al menos una letra mayuscula");
          return false;
        } else if (!/[a-z]/.test(password)) {
              alert("La contraseña debe contener al menos una letra minuscula");
              return false;
            } else if (!/\d/.test(password)) {
                    alert("La contraseña debe contener al menos un numero");
                    return false;
                } else if (!/[@#$%]/.test(password)) {
                     alert("La contraseña debe contener al menos un carácter especial");
                     return false;
                    } else {
                      alert("Contraseña valida:D");
                      return true;
    }
}
function confirmarContraseña(){
    const passwordX2 = document.getElementById("PasswordX2").value;
    if (passwordX2 === password){
        return true;
    }else{
        alert("La contraseña no coincide:( ")
    }
}
function validarTelofono(){
    const telefonoUsr = document.getElementById("telefonoUsr");
        if (telefonoUsr.length === 8){
            return true

        }else{
            alert("Telefono No valido")
            return false;
        }
} 
function agregarUsrPrueba(){
    usuarios= {
         email: password,
    }
}


function emailExiste(email) {
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            return true; // Email encontrado
        }
    }
    return false; // Email no encontrado
}


function mostrarToast(mensaje) {
    const toast = document.getElementById("toast");
    toast.textContent = mensaje;
    toast.className = "toast mostrar";

    setTimeout(() => {
        toast.className = "toast"; // oculta después de 3 segundos
    }, 3000);
}

//Esto es de prueba para ver si el mensaje de inicio de sesion aparece
function validarLogin() {
    const emailValido = validarEmail();
    const contraseñaValida = validarContraseña();

    if (!emailValido || !contraseñaValida) {
        return false;
    }

    mostrarToast("Sesión iniciada correctamente");
    return true;
}




   





