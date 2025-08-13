
// Lista donde se van a guardar los nombres
let listaAmigos = [];


// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor escribe el nombre de tu amigo.");
        return;
    }

    listaAmigos.push(nombre);
    input.value = "";
    mostrarLista();
}

// Funcion para mostrar los nombres en la lista 
function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        // En esta linea de codigo muestro con indice el nombre.
        li.textContent = `${i + 1}. ${listaAmigos[i]}`;
        ul.appendChild(li);
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay Amigos para sortear. Agrega al menos un amigo.");
        return;
    }

    let indice = Math.floor(Math.random() * listaAmigos.length);
    let elegido = listaAmigos[indice];

    let resultado = document.getElementById("resultado");

    // Actualizo resultado (este es un <ul> en el HTML), muestro un <li> con el resultado
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${elegido}</strong></li>`;
}


