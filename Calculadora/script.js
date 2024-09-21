const resultado = document.querySelector(' .result '); const confirmar = document.querySelector(' .igual ');


function insert( valor ){
    if(resultado.innerHTML == 0){
        resultado.innerHTML = ""
        resultado.innerHTML += valor;  
    }else{
        resultado.innerHTML += valor; }


    }


function clean(){ resultado.innerHTML = ' '; }


function backspace(){ if( resultado.textContent){
    let result = document.getElementById('resultado').innerHTML
    resultado.innerHTML = result.substring(0, result.length -1); } }


function confirma(){
    if(resultado.textContent != 'Erro'){ document.getElementById('resultado').innerHTML = eval(resultado.innerHTML) }
}


document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === '.'  || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')') {
    appendToDisplay(key);
} else if (key === 'Enter') {
        calculate();
} else if (key === 'Backspace') {
    calculate();
} else if (key === 'Escape') {
    this.documentElement.querySelector("#display").value = '';
}
});