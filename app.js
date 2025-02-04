// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    
    let input= document.getElementById('amigo');
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");  
        return; 
    }
    // Actualizar el array de amigos
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    input.value = "";
    
    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}