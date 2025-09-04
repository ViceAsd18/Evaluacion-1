function validarEmail() {
    const email = document.getElementById("reg-email").value;
    let regex = /^[a-zA-Z0-9._-]+@duoc\.cl$/;
    //[a-zA-Z0-9._-] validar masyuculas, minusculas , numeros y carecteres
    // + @ validar que tenga el arroba
    // duoc valida si es de la intitucion
    // .cl el domininio debe ser si o si .cl
    if (regex.test(email)) {
        return true;
    } else {
        alert("El email debe ser de la institución (@duoc.cl)");
        return false;
    }
}
 
function validarContraseña() {
    const password = document.getElementById("reg-password").value;
    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    } else if (!/[A-Z]/.test(password)) {
        alert("La contraseña debe contener al menos una letra mayúscula");
        return false;
    } else if (!/[a-z]/.test(password)) {
        alert("La contraseña debe contener al menos una letra minúscula");
        return false;
    } else if (!/\d/.test(password)) {
        alert("La contraseña debe contener al menos un número");
        return false;
    } else if (!/[@#$%]/.test(password)) {
        alert("La contraseña debe contener al menos un carácter especial (@#$%)");
        return false;
    }
    return true;
}

function confirmarContraseña() {
    const password = document.getElementById("reg-password").value;
    const passwordX2 = document.getElementById("confirm-password").value;
    if (passwordX2 === password) {
        return true;
    } else {
        alert("La contraseña no coincide");
        return false;
    }
}
function validarTelofono(){
    const telefonoUsr = document.getElementById("telefonoUsr").value.trim;
        if (telefonoUsr.length === 0 || telefonoUsr.length === 8){
            return true

        }else{
            alert("Telefono No valido")
            return false;
        }
} 
function register(){
    //obtenemos los inpust
    // el .value obtiene lo que escribio el usuario
    //el .trim() limpia espacios extra al inicio y al final
    const nombre = document.getElementById("reg-nombre").value.trim();
    const correo = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    //validar que los campos 
    
    if(!validarEmail()) return; 
    if(!validarContraseña()) return; 
    if(!confirmarContraseña()) return;
    if(!validarTelofono()) return;

    //creo la "base de datos" con una lista
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    //valido que el correo no este ya registrado
    if (usuarios.find(u => correo)){
        alert("Usuario registrado correctamente")
    }
    //agrego al nuevo usuario
    usuarios.push({nombre:nombre,correo:correo,password:password})
    //guardamos y actualizamos a JSON
    localStorage.setItem("usuarios",JSON.stringify(usuarios))
    alert("Usuario registrado")

    
}
//para comprobar que se registro: f12 te vas a consola y escribes localStorage.getItem("usuarios")
//y deberia aparecer esto [{"correo":"juan.perez@duoc.cl","password":"Juan2025@"}]'

function login(){
    const correolog = document.getElementById("log-email").value.trim();
    const passwordlog = document.getElementById("log-password").value.trim();
    //obtengo la lista
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    //Buscaamos
    const usuario = usuarios.find(u => u.correo === correolog && u.password === passwordlog); // y si u (usuarios) concicide con su busqueda, entrara  
    if(usuario){
        alert("Bienvenido "+ usuario.nombre +"y a " + card)

    }else{
        alert("Correo o contraseña incorrecta")
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
})
