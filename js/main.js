
// LOG IN
document.addEventListener("DOMContentLoaded", () => {
    const hoy = new Date();
    alert("Bienveni@s al Club Cannábico Greeensheep \n" + hoy.toLocaleString());

    let resp = confirm("Quieres ingresar como socio?")

    if (resp) {
        do {
            let ci = prompt("Ingresa tu CI completa. \nEnter para salir")
            let socio = coleccion_socios.find((s) => s.ci === ci);
            if (socio) {
                let login_actual = login_socio()
                console.log(login_actual)
                if (login_actual) {
                    console.log(login_actual.is_adm)
                    if (login_actual.is_adm == true) {
                        menu_admin()
                    } else {
                        mostrar_menu()
                    }
                }
            } else if (ci == "") {
                resp = false
            } else {
                alert("CI Incorrecta - No pertenece al padrón")
            }
        } while (resp)
    }
})

function login_socio() {
    let user = prompt("Ingrese su usuario");
    let pass = prompt("Ingrese su contraseña");
    if (user && pass) {
        return checkearCredenciales(user, pass);
    } else {
        alert("Es necesario ingresar usuario y contraseña");
        let nuevo_registro = new RegistroBit("intento fallido de logueo", "desconocido");
        bitacora.addRegistro(nuevo_registro);
        return null;
    }
}

function checkearCredenciales(user, pass) {
    let login = colleccion_logines.find((l) => l.user === user && l.pass == pass);
    if (login) {
        alert("Bienvenid@ " + login.getSocio().getNombreCompleto());
        bitacora.addRegistro(new RegistroBit("se logueo " + login.getUser(), login.getUser()));
        login_actual = login;
        return login;
    } else {
        alert("credenciles incorrectas");
        bitacora.addRegistro(new RegistroBit("credenciales incorrectas " + user + " " + pass, "desconocido"));
        return null;
    }
}

function mostrar_menu() {
    let flag = true;
    while (flag) {
        let mensaje = "Indique lo que desea hacer: ";
        mensaje += "\n1) Ver lista de genéticas disponibles ";
        mensaje += "\n2) Comprar marihuana ";
        mensaje += "\n3) Editar mis datos ";
        mensaje += "\n4) Salir ";

        let resp = prompt(mensaje);

        switch (resp) {

            case "1":
                lista_geneticas();
                break;
            case "2":
                carrito();
                break;
            case "3":
                datos_socio();
                break;
            case "4":
                alert("Gracias por utilizar nuestra pagina :) ");
                flag = false;
                break;
            case null:
                alert("Gracias por utilizar nuestra pagina :) ");
                flag = false;
                break;
            default:
                alert("No ingreso una opcion valida");
        }
    }
}

function lista_geneticas() {
    let stock = hay_stock()
    if (stock) {
        stock.sort((a, b) => {
            if (a.precio > b.precio) {
                return 1;
            }
            if (a.precio < b.precio) {
                return -1;
            }
            return 0;
        })
        let mensaje = "Las genéticas en stock son:";
        stock.forEach((gen) => {
            mensaje += "\n " + gen.getDatos();
        })
        bitacora.addRegistro(new RegistroBit("Observó genéticas", login_actual.getUser()));
        alert(mensaje);
        return stock
    }
}

function hay_stock() {
    let stock = colleccion_geneticas.filter((g) => g.stock == true)
    if (stock.length == 0) {
        alert("No hay geneticas en stock");
        bitacora.addRegistro(new RegistroBit("No hay stock para el cliente", login_actual.getUser()));
        return false;
    }
    return stock;
}

function carrito() {
    let comprando = true
    let gramos_compra = 0;
    let total_compra = 0;
    let lista_compra = "";

    while (comprando) {
        stock = lista_geneticas()
        let gen_elejida = prompt("Ingrese el número de la genética.  \nEnter para salir o finalizar");
        let gen_encontrada = stock.find((a) => a.id == gen_elejida)
        console.log(gen_encontrada)
        if (gen_encontrada) {
            while (gen_encontrada) {
                let gramos = validar_gramos(gramos_compra);
                console.log(gramos)
                if (gramos == -1) {
                    gen_encontrada = false;
                }
                else if (gramos) {
                    subtotal = gramos * gen_encontrada.getPrecio()
                    lista_compra += "\n" + gen_encontrada.getDatos() + " - " + gramos + "g = " + subtotal;
                    total_compra += subtotal;
                    gramos_compra += gramos
                    gen_encontrada = false;
                    alert("Lista de compra" + lista_compra + "\n Total= $" + total_compra)

                }
            }
        }
        else if (gen_elejida == "") {
            if (gramos_compra != 0) {
                let venta = confirm("Quieres confirmar la compra?" + lista_compra + "\n Total= $" + total_compra)
                if (venta) {
                    bitacora.addRegistro(new RegistroBit("Compra realizada: " + lista_compra + "\n $" + total_compra , login_actual.getUser()));
                    alert("Gracias por tu compra!")
                } else {
                    bitacora.addRegistro(new RegistroBit("Compra cancelada: " + lista_compra + "\n $" + total_compra , login_actual.getUser()));
                    alert("Chauu")
                }
            }
            comprando = false
        }

        else {
            alert("Dato incorrecto")
        }
    }
}

function validar_gramos(gramos_compra) {
    let cantidad = parseFloat(prompt("Ingrese la cantidad de gramos. \nEnter para salir"))
    let suma = cantidad + gramos_compra
    console.log(cantidad)
    if (cantidad <= 0) {
        alert("Debes ingresar una cantidad mayor a 0")
        return false
    } else if (suma > 40) {
        alert("No puedes comprar mas de 40g.")
        return false
    } else if (isNaN(cantidad)) {
        return -1
    }
    else {
        return cantidad
    }
}

function datos_socio() {
    let flag = true;
    while (flag) {
        let mensaje = "Indique lo que desea hacer: ";
        mensaje += "\n1) Editar usuario ";
        mensaje += "\n2) Editar contraseña ";
        mensaje += "\n3) Salir ";
        let resp = prompt(mensaje);
        switch (resp) {
            case "1":
                edit_user();
                break;
            case "2":
                edit_pass();
                break;
            case "3":
                flag = false;
                break;
            case null:
                flag = false;
                break;
            default:
                alert("No ingreso una opcion valida");
        }
    }
}

function edit_user() {
    let nuevo_user = prompt("Ingrese el nuevo nombre de usuario")
    if (nuevo_user){
    login_actual.setUser(nuevo_user);
    console.log(login_actual.getUser())
    bitacora.addRegistro(new RegistroBit("Nombre de usuario modificado: " + nuevo_user + " - " + login_actual.getSocio().getNombreCompleto(), login_actual.getUser()));
    
    alert("Usuario modificado con exito " + login_actual.getDatos())
}
}

function edit_pass() {
    let nueva_pass = prompt("Ingrese la nueva contraseña")
    if(nueva_pass){
    login_actual.setPass(nueva_pass);
    console.log(login_actual.getPass())
    bitacora.addRegistro(new RegistroBit("Contraseña modificada: " + nueva_pass + " - " + login_actual.getSocio().getNombreCompleto(), login_actual.getUser()));
    
    alert("Contraseña modificada con exito " + login_actual.getDatos())
}
}


function menu_admin() {
    let flag = true;
    while (flag) {

        let mensaje = "Indique lo que desea hacer: ";
        mensaje += "\n1) Editar genéticas ";
        mensaje += "\n2) Editar socios ";
        mensaje += "\n3) Ver Bitacora ";
        mensaje += "\n4) Salir ";

        let resp = prompt(mensaje);

        switch (resp) {

            case "1":
                edit_geneticas();
                break;
            case "2":
                edit_socios();
                break;
            case "3":
                ver_bitacora();
                break;
            case "4":
                alert("Gracias por utilizar nuestra pagina :) ");
                flag = false;
                break;
            case null:
                alert("Gracias por utilizar nuestra pagina :) ");
                flag = false;
                break;
            default:
                alert("No ingreso una opcion valida");


        }
    }
}

function edit_geneticas() {
    let flag = true;
    while (flag) {
        let mensaje = "Indique lo que desea hacer: ";
        mensaje += "\n1) Editar genética ";
        mensaje += "\n2) Agregar genética ";
        mensaje += "\n3) Eliminar genética ";
        mensaje += "\n4) Salir ";
        let resp = prompt(mensaje);
        switch (resp) {
            case "1":
                edit2_gen();
                break;
            case "2":
                agregar_gen();
                break;
            case "3":
                eliminar_gen();
                break;
            case "4":
                flag = false;
                break;
            case null:
                flag = false;
                break;
            default:
                alert("No ingreso una opcion valida");
        }
    }
}

function edit2_gen() {
    let flag = true;
    while (flag) {
        let mensaje = "Indique lo que desea hacer: ";
        mensaje += "\n1) Editar precio ";
        mensaje += "\n2) Editar stock ";
        mensaje += "\n3) Ver lista de genéticas ";
        mensaje += "\n4) Salir ";
        let resp = prompt(mensaje);
        switch (resp) {
            case "1":
                edit_precio();
                break;
            case "2":
                edit_stock();
                break;
            case "3":
                lista_geneticas_total();
                break;
            case "4":
                flag = false;
                break;
            case null:
                flag = false;
                break;
            default:
                alert("No ingreso una opcion valida");
        }
    }
}

function edit_precio() {
    lista_geneticas_total()
    let numero = prompt("Número de genética a modificar")
    let gen_a_modificar = colleccion_geneticas.find((g) => g.id == numero)
    if (gen_a_modificar) {
        let nuevo_precio = prompt("Nuevo precio por gramo")
        if (nuevo_precio && nuevo_precio >= 0) {
            gen_a_modificar.setPrecio(nuevo_precio)
            let mensaje = gen_a_modificar.getDatos()
            alert("Modificado con exito, precio:" + mensaje)
            bitacora.addRegistro(new RegistroBit("Precio modificado con éxito " + mensaje, login_actual.getUser()))
        } else {
            alert("Debes ingresar un numero mayor a 0")
        }
    } else {
        alert("No se encontró genética")
    }
}

function edit_stock() {
    lista_geneticas_total()
    let numero = prompt("Número de genética a modificar")
    let gen_a_modificar = colleccion_geneticas.find((g) => g.id == numero)
    if (gen_a_modificar) {
        if (gen_a_modificar.getStock() == false) {
            let nuevo_estado = confirm("Agregar esta variedad al stock?")
            if (nuevo_estado) {
                gen_a_modificar.setStock(true)
                let mensaje = gen_a_modificar.getStock()
                alert("Modificado con exito, stock:" + mensaje)
                bitacora.addRegistro(new RegistroBit( gen_a_modificar.getDatos() + "Stock modificado con éxito = " + mensaje, login_actual.getUser()))
            }
        } else if (gen_a_modificar.getStock() == true) {
            let nuevo_estado = confirm("Eliminar esta variedad del stock?")
            if (nuevo_estado) {
                gen_a_modificar.setStock(false)
                let mensaje = gen_a_modificar.getStock()
                alert("Modificado con exito, stock:" + mensaje)
                bitacora.addRegistro(new RegistroBit( gen_a_modificar.getDatos() + "Stock modificado con éxito = " + mensaje, login_actual.getUser()))
            }
        }
    } else {
        alert("No se encontró genética")
    }
}

function lista_geneticas_total() {
    let mensaje = ""
    colleccion_geneticas.forEach((g) => mensaje += "\n" + g.getDatos() + " - Stock: " + g.getStock())
    alert(mensaje)
    bitacora.addRegistro(new RegistroBit("Observo la lista total de genéticas", login_actual.getUser()))
}

function agregar_gen() {
    let nuevo_nombre = prompt("Ingrese el nombre de la nueva genética");
    let nuevo_precio = prompt("Ingrese el nuevo precio");
    if (nuevo_nombre && nuevo_precio && nuevo_precio >= 0){
    indice_maximo = max_id()
    let nuevo_id = indice_maximo + 1
    console.log(nuevo_id)
    validacion = confirm("Confirma Nueva genética? \n " + nuevo_id + "." + nuevo_nombre + "\n $" + nuevo_precio + " x g")
    if (validacion) {
        let nueva_genetica = new Genetica(nuevo_id, nuevo_nombre, nuevo_precio)
        colleccion_geneticas.push(nueva_genetica)
        let mensaje = nueva_genetica.getDatos()
        bitacora.addRegistro(new RegistroBit("Genética agregada " + mensaje, login_actual.getUser()))
        alert(mensaje)
    }
}
}

function max_id(){
    let coleccion_id = []
    colleccion_geneticas.forEach((g) => coleccion_id.push(g.id));
    console.log(coleccion_id)
    return Math.max(...coleccion_id)
}

function eliminar_gen() {
    lista_geneticas_total()
    let indice = prompt("Ingrese el numero de la genetica a eliminar");
    let gen_a_eliminar = colleccion_geneticas.find((g) => g.id == indice);
    if (gen_a_eliminar) {
        mensaje = gen_a_eliminar.getDatos()
        validacion = confirm("Confirma Genética a elminiar? \n " + mensaje)
        if (validacion) {
            colleccion_geneticas = colleccion_geneticas.filter((a) => a.id != indice);
            bitacora.addRegistro(new RegistroBit("Genética eliminada " + mensaje, login_actual.getUser()))
            alert("Genética eliminada con exito");
        }
    }
}


function edit_socios() {
    let flag = true;
    while (flag) {
        let mensaje = "Indique lo que desea hacer: ";
        mensaje += "\n1) Ver lista de socios ";
        mensaje += "\n2) Agregar socio ";
        mensaje += "\n3) Eliminar socio ";
        mensaje += "\n4) Salir ";
        let resp = prompt(mensaje);
        switch (resp) {
            case "1":
                lista_socios();
                break;
            case "2":
                agregar_socio();
                break;
            case "3":
                eliminar_socio();
                break;
            case "4":
                flag = false;
                break;
            case null:
                flag = false;
                break;
            default:
                alert("No ingreso una opcion valida");
        }
    }
}

function lista_socios() {
    let mensaje = ""
    coleccion_socios.forEach((g) => mensaje += "\n" + g.getDatos())
    bitacora.addRegistro(new RegistroBit("Observo la lista total de socios ", login_actual.getUser()))
    alert(mensaje)
}

function agregar_socio() {
    let nuevo_nombre = prompt("Ingrese el nombre del nuevo socio");
    let nuevo_apellido = prompt("Ingrese el apellido del nuevo socio");
    let nueva_ci = prompt("Ingrese la CI del nuevo socio.")
    if(nuevo_nombre && nuevo_apellido && nueva_ci){
    indice_maximo_socios = max_id_socio()
    let nuevo_id_socio = indice_maximo_socios + 1
    console.log(nuevo_id_socio)
    validacion = confirm("Confirma Nuevo Socio? \n " + nuevo_id_socio + ". " + nuevo_nombre + " " + nuevo_apellido + " - " + nueva_ci)
    if (validacion) {
        let nuevo_socio = new Socio(nuevo_id_socio,nuevo_nombre,nuevo_apellido,nueva_ci)
        coleccion_socios.push(nuevo_socio)
        nuevo_login(nuevo_socio,nuevo_nombre,nuevo_apellido)
        let mensaje = nuevo_socio.getDatos()
        bitacora.addRegistro(new RegistroBit("Socio agregado " + mensaje, login_actual.getUser()))
        alert(mensaje)
    }
   }
}

function max_id_socio(){
    let coleccion_id_socios = []
    coleccion_socios.forEach((s) => coleccion_id_socios.push(s.nro_socio));
    console.log(coleccion_id_socios)
    return Math.max(...coleccion_id_socios)
}

function nuevo_login(nuevo_socio,nuevo_nombre,nuevo_apellido){
let inicial = nuevo_nombre.toLowerCase().charAt(0)
console.log(inicial)
let nuevo_user = inicial + nuevo_apellido.toLowerCase()
nuevo_login = new Login(nuevo_user,"pass1234")
nuevo_login.setSocio(nuevo_socio)
bitacora.addRegistro(new RegistroBit("Login agregado " + nuevo_login.getDatos(), login_actual.getUser()))
}

function eliminar_socio() {
    lista_socios()
    let indice = prompt("Ingrese el numero del socio a eliminar");
    let socio_a_eliminar = coleccion_socios.find((s) => s.nro_socio == indice);
    if (socio_a_eliminar) {
        mensaje = socio_a_eliminar.getDatos()
        validacion = confirm("Confirma elminiar socio? \n " + mensaje)
        if (validacion) {
            coleccion_socios = coleccion_socios.filter((a) => a.nro_socio != indice);
            bitacora.addRegistro(new RegistroBit("Socio eliminado " + mensaje, login_actual.getUser()))
            alert("Socio eliminado con exito");
        }
    }
}


function ver_bitacora(){

    bitacora.mostrarBitacora();

}


/* ENTREGA 1
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
*/
