var tarjetas = [
    "1.jpeg","1.jpeg","2.jpeg","2.jpeg",
    "3.jpeg","3.jpeg","4.jpeg","4.jpeg",
    "5.jpeg","5.jpeg","6.jpeg","6.jpeg",
    "7.jpeg","7.jpeg","0.jpeg","0.jpeg" ,         
];



var imagentemporal, esperando = false;

var contador=0;

function CambiarImagen(imagen, indice){
    // alert(imagen);
    imagen.src = `./img/${tarjetas[indice]}`;
    if(!esperando) imagen_temporal= imagen;

    else if(imagen_temporal.src == imagen.src){
        //alert("¡Encontramos un par!");
        setTimeout(function(){EliminarPar(imagen_temporal,imagen)},500);
    }else{
        //alert("No encontraste par");
        setTimeout(function(){RegresarImg(imagen_temporal,imagen)},500);
    }
    esperando = !esperando;
}

function RegresarImg(imagen1, imagen2){
    imagen1.src = "./img/9.jpeg";
    imagen2.src = "./img/9.jpeg";
    imagen1.setAttribute("onclick", `CambiarImagen(this,${imagen1.id})`);
    imagen2.setAttribute("onclick", `CambiarImagen(this,${imagen2.id})`);
}

function EliminarPar(imagen1,imagen2){
    /*imagen1.src = "";
    imagen1.style.display = "none";
    imagen2.src = "";
    imagen2.style.display = "none";*/

    imagen1.style.visibility = "hidden";
    imagen2.style.visibility = "hidden";
    imagen1.removeAttribute("onclick");
    imagen2.removeAttribute("onclick");
    contador++;
    if(contador != 8){
        document.getElementById("contador").innerHTML = `Pares encontrados: ${contador}`;
    
    }else{
        document.getElementById("contador").innerHTML = "Ganaste!!";

    }
}

function Revolver() {
    var i = 0, j = 0, temporal  = 0;
    for (let i = 0; i < tarjetas.length-1; i++) {
        j = Math.floor(Math.random() * (i+1));
        [tarjetas[i],tarjetas[j]] = [tarjetas[j],tarjetas[i]];
    }
    // alert(tarjetas.join(" - "))
    document.getElementById("salida").innerHTML = tarjetas.join(" - ");
}

function Fondo(){
    var fondo = Math.floor(Math.random()*3)+1;
    document.getElementById("tabla").style=`background-image: url("./img/fondo${fondo}.jpeg");`;
}

function Reiniciar(){
    location.reload();
}