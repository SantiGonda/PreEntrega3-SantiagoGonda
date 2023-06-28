
//CARRITO

document.addEventListener("DOMContentLoaded", () => {
    let comprador = confirm("Quieres comprar unos gramos?")
    if (comprador) {
        let total_compra = 0;
        let lista_compra = "";

        let genetica = "";
        let gramos = 1

        do {
            genetica = solicitarGenetica()
            if (genetica && genetica != -1) {
                let descripcion = getDescripcion(genetica);
                if (descripcion == "") {
                    alert("Código incorrecto");
                } else {
                    gramos = solicitarGramos()
                    if (gramos && gramos != -1) {
                        if (gramos <= 0 || gramos > 40) {
                            alert("Cantidad incorrecta")
                        } else {
                            let importe = getImporte(genetica) * gramos;
                            lista_compra += "\n" + descripcion + " x " + gramos + "g";
                            total_compra += importe;
                            alert(descripcion + " x " + gramos + "g" + " = $" + importe)
                        }
                    }
                }
                console.log(genetica)
                console.log(gramos)
            }
        }
        while (genetica && gramos);

        if (total_compra > 0) {
            alert("Lista de articulos comprados : " + lista_compra);
            alert("El total de la compra es: $" + total_compra);
        } else {
            alert("Compra vacia!");
        }
    }
})


function solicitarGenetica() {
    let genetica = prompt("Ingrese el número de la genética deseada. S para salir de la compra")
    if (genetica == "s" || genetica == "S") {
        return false
    } else if (validarInput(genetica)) {
        return genetica
    }
    return -1
}

function solicitarGramos() {
    let gramos = prompt("Ingrese la cantidad de gramos deseada. S para salir de la compra")
    if (gramos == "s" || gramos == "S") {
        return false
    } else if (validarInput(gramos)) {
        return gramos
    }
    return -1
}


function validarInput(input) {
    if (input == "") {
        alert("Codigo vacio!")
        return false
    }
    if (!input) {
        return false
    }
    if (isNaN(parseInt(input))) {
        alert("Debe ingresar un numero")
        return false
    }
    return true
}


function getImporte(genetica) {
    let importe = -1;
    switch (genetica) {
        case "1":
            importe = 10
            break
        case "2":
            importe = 20
            break;
        case "3":
            importe = 30
            break
        case "4":
            importe = 40
            break
        case "5":
            importe = 50
            break
        case "6":
            importe = 60
            break
    }
    return importe;
}

function getDescripcion(genetica) {
    let descripcion = "";
    switch (genetica) {
        case "1":
            descripcion = "Kryptonite $10"
            break
        case "2":
            descripcion = "Double Cookies $20"
            break
        case "3":
            descripcion = "Pineapple Express $30"
            break
        case "4":
            descripcion = "Lebron Haze $40"
            break
        case "5":
            descripcion = "Radical Juice $50"
            break
        case "6":
            descripcion = "Sour Ripper $60"
            break
    }
    return descripcion
}
