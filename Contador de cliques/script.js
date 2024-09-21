let contador = 0;


function contarClique() {
    contador++;
    document.getElementById("contador").textContent = "O contador está com " + contador + " cliques";
}


function zerarContador() {
    contador = null;
    document.getElementById("contador").textContent = "O contador está zerado";
}