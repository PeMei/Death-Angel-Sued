let hiddenmode = false;
let frasessecretas = ['Grande Fallen Angel, gostaria de saber ', 'Poderoso Fallen Angel, você poderia me dizer', 'Grande senhor da escuridão Fallen Angel, você poderia me responder ', 'Fallen Angel ser de grande sabedoria, gostaria muito de saber ']
let frase = "";
let escondido = ""


let texto = document.querySelector("#Text");
let resp = document.querySelector("#resp");
let popup = document.querySelector("#popup");
let blocker = document.querySelector("#blocker");


let i = 0;
limpar();
texto.addEventListener("keydown", function(event){
    if(hiddenmode == true && event.key.length == 1){
        event.preventDefault();
        escondido = escondido + event.key
        texto.value = frase.substring(0,i);
        i++;
    }
    if(event.key == "Escape"){
        hiddenmode = !hiddenmode;
    }
});
function mostrar(){
    blocker.classList.remove("hidden")
    popup.classList.remove("hidden")
    resp.innerHTML = escondido;
}
//
function limpar(){
    texto.value = "";
    frase = frasessecretas[Math.floor(Math.random() * array.length)];
    escondido = "";
    i = 0;
    blocker.classList.add("hidden")
    popup.classList.add("hidden")
    resp.innerHTML = "";
}
