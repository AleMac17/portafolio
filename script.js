let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");


function cambiarPestana(boton){
    switch (boton){
        case boton1: boton1.classList.toggle ("botonpresionado");
        boton2.classList.remove ("botonpresionado")
        boton3.classList.remove ("botonpresionado")
        console.log("Queonda");
        break;
        case boton2: boton2.classList.toggle ("botonpresionado");
        boton1.classList.remove ("botonpresionado")
        boton3.classList.remove ("botonpresionado")
        console.log("Queonda");
        break;
        case boton3: boton3.classList.toggle ("botonpresionado");
        boton1.classList.remove ("botonpresionado")
        boton2.classList.remove ("botonpresionado")
        console.log("Queonda");
        break;
        default:console.log("Queondaasdasdasd");       
    }
    console.log("Queonda");
}
    