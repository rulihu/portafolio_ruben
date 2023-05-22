/*parte de efecto de aparicion */
window.addEventListener("scroll", function(){
    /*obtine todas las clases*/
    var img = document.querySelectorAll(".fade_up")
    for(var i=0;i<img.length;i++){
        /*deteccion de altura de pagina*/ 
        var altura = window.innerHeight/1.3;
        var distancia = img[i].getBoundingClientRect().top;/*camptura distancia supe. de ventana*/
        img[i].classList.add("transform_right");
        if(distancia <= altura ){
            img[i].classList.add("aparece")
        }
        else{
            img[i].classList.remove("aparece")
        }
    }
})






/*parte resposniva boton en tablet*/
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
