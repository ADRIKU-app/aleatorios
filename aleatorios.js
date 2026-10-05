function numeroAleatorio(){
    let numero = Math.floor(Math.random() * 100) + 1;
    console.log(numero);
    return numero;
}

function generarAleatorios(){
    let aleatorios = [];
    let cantidad = Number(document.getElementById("cantidad").value);

    if(!Number.isInteger(cantidad) || cantidad < 5 || cantidad > 20){
        alert("Ingresa un número entero entre 5 y 20.");
        return;
    }

    for(let i = 0; i < cantidad; i++){
        console.log(i);
        let numero = numeroAleatorio();
        aleatorios.push(numero);
    }

    mostrarResultados(aleatorios);
}

function mostrarResultados(arregloNumeros){
    let resultado = document.getElementById("resultado");
    let tabla = document.createElement("table");
    let encabezado = document.createElement("thead");
    let filaEncabezado = document.createElement("tr");
    let tituloIndice = document.createElement("th");
    let tituloNumero = document.createElement("th");

    tituloIndice.textContent = "Índice";
    tituloNumero.textContent = "Número aleatorio";
    filaEncabezado.append(tituloIndice, tituloNumero);
    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);

    let cuerpo = document.createElement("tbody");
    arregloNumeros.forEach(function(numero, indice){
        let fila = document.createElement("tr");
        let celdaIndice = document.createElement("td");
        let celdaNumero = document.createElement("td");

        celdaIndice.textContent = indice;
        celdaNumero.textContent = numero;
        fila.append(celdaIndice, celdaNumero);
        cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);
    resultado.replaceChildren(tabla);
}