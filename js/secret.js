let hiddenmode = false;
let frasessecretas = ['Grande D34th 4ng3l, gostaria de ', 'Poderoso D34th 4ng3l, você poderia ']
let frase = "";
let escondido = ""


let texto = document.querySelector("#Text");
let resp = document.querySelector("#resp");
let popup = document.querySelector("#popup");
let blocker = document.querySelector("#blocker");


let i = 0;
clear();
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
//Math.floor(Math.random() * array.length)
function clear(){
    texto.value = "";
    frase = frasessecretas[0];
    escondido = "";
    i = 0;
    blocker.classList.add("hidden")
    popup.classList.add("hidden")
    resp.innerHTML = "";
}
