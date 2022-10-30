let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let lineas1 = document.getElementById("lineas-grid-1");
let lineas2 = document.getElementById("lineas-grid-2");
let lineas3 = document.getElementById("lineas-grid-3");



function cambiarPestana(boton){
    switch (boton){
        case boton1: boton1.classList.toggle ("botonpresionado");
        boton2.classList.remove ("botonpresionado")
        boton3.classList.remove ("botonpresionado")
        lineas1.classList.remove("no-visible");
        lineas2.classList.add("no-visible");
        lineas3.classList.add("no-visible");
        break;
        case boton2: boton2.classList.toggle ("botonpresionado");
        boton1.classList.remove ("botonpresionado")
        boton3.classList.remove ("botonpresionado")
        lineas1.classList.add("no-visible");
        lineas2.classList.remove("no-visible");
        lineas3.classList.add("no-visible");
        break;
        case boton3: boton3.classList.toggle ("botonpresionado");
        boton1.classList.remove ("botonpresionado")
        boton2.classList.remove ("botonpresionado")
        lineas1.classList.add("no-visible");
        lineas2.classList.add("no-visible");
        lineas3.classList.remove("no-visible");
        break;
        default:console.log("Queondaasdasdasd");       
    }
}
    