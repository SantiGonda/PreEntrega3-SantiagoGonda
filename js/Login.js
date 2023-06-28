
// LOG IN
document.addEventListener("DOMContentLoaded", () => {

let resp = confirm("Quieres ingresar como socio?")

if (resp) {
    do {
        let ci = prompt("Ingresa tu CI Uruguaya (Solo numeros). \nEnter para salir")
            let validacion
            validacion = validarSocio(ci)
            if (validacion) {
                socio = getSocio(ci)
                if (ci == 44) {
                    alert("Bienvenida " + socio + "!")
                    break
                } else {
                    alert("Bienvenido " + socio + "!")
                    break
                }
            }else if(ci == ""){
                    resp = false
            }
    } while (resp)
}
})

function validarSocio(ci) {
    if (isNaN(ci)) {
        alert("Cédula incorrecta, debes ingresar solo números")
        return false
    } else if (ci == "11" || ci == "22" || ci == "33" || ci == "44") {
        return true
    } else if(ci == ""){
        alert("Hasta luego")
        return false
    } else {
        alert("Cedula no encontrada")
        return false
    }
}

function getSocio(ci) {
    let socio = "";
    switch (ci) {
        case "11":
            socio = "Santiago";
            break;
        case "22":
            socio = "Franco";
            break;
        case "33":
            socio = "Alberto";
            break;
        case "44":
            socio = "Agustina";
            break;
    }
    return socio;
}
