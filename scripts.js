



function calcPrecioFinal() {
    console.log("ingreso a calcular precio");

    //En cantEnt almacenamos la cantidad de entradas que ingreso el usuario
    let cantEnt=document.getElementById("cantEntradas").value;
    console.log("cant: " + cantEnt);

    //En porcDesc almacenamos el porcentaje de descuento que selecciona el usuario
    let desc=document.getElementById("porcDescuento").value;
    console.log("desc: " + desc);

    //Obetenemos el decuento que hay q realizar
    let descTotal = (cantEnt * 1000) * desc / 100;
    console.log("descTotal" + descTotal);

    //Obtenemos el descuento total del precio total
    let precioFin = (cantEnt * 1000) - descTotal;
    console.log(precioFin);

    //Coloco en html el valor de las entradas - el descuento
    document.getElementById("precioFinal").value=precioFin;
}