
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




// capturar a los elementos del formulario de mascotas
const btnAgregar = document.getElementById("btn-agregar"); // botón "Agregar mascota"
const listaMascotas = document.getElementById("lista-mascotas"); // contenedor donde se insertan las card para agregar mascotas


//captura cuando se hace clic en el botón "Agregar mascota"
btnAgregar.addEventListener("click", () => {

    // Crear un contenedor (card) para la mascota
    const card = document.createElement("div");
    card.className = "mascota-card"; //Se le asigna la clase "mascota-card" para los estilos

    /*
    Agregar el contenido HTML a la card:
      - Input para nombre de la mascota
      - Select para tipo de mascota
      - Botón "Eliminar" para quitar la card

        IMPORTANTE: en los atributos name se usan corchetes []:
            name="nombreMascota[]"
            name="tipoMascota[]"
            Esto por que el formulario puede tener múltiples valores 
            con el mismo nombre, y el backend los recibirá como LISTAS.
        Ejemplo de envío:
            nombreMascota[] = ["Firulais", "Michi"]
            tipoMascota[]   = ["Perro", "Gato"]
    */
    card.innerHTML = `
                    <div class="input-group">
                        <label>Nombre de la mascota</label>
                        <input type="text" class="input-text" name="nombreMascota[]" required>
                    </div>

                    <div class="input-group container-tipo-mascota">
                        <label>Tipo de mascota</label>
                        <select class="input-text" name="tipoMascota[]" required>
                            <option value="">Seleccione un tipo de animal</option>
                            <option value="Gato">Gato</option>
                            <option value="Perro">Perro</option>
                            <option value="Ave">Ave</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <button type="button" class="btn-eliminar">Eliminar</button>
                    </div>
                    `;
//  Asignar funcionalidad al botón "Eliminar":
//  cuando se hace clic, elimina solo esta card de mascota
card.querySelector(".btn-eliminar").addEventListener("click", () => card.remove());

// Insertar la nueva card en el contenedor de la lista
listaMascotas.appendChild(card);
});
