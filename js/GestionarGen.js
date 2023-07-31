class GestionarGeneticas {

    iniciar() {

        geneticas = [

            {
                "id": 1,
                "nombre": "Kryptonite",
                "precio": 10,
                "stock": 200,
                "img": "IMG_0315.jpg",
                "descripcion": "La Kryptonite de Pyramid Seeds es un fenotipo feminizado procedente de la Yumbolt, de predominancia sativa (80%), con hojas y flores esponjosas cubiertas por una fina capa de cristales. Se trata de una planta de predominancia sativa.",
                "web": "https://www.pyramidseeds.com/es/fotodependientes/58-kryptonite.html",
                "cantidad": 0
            },
            {
                "id": 2,
                "nombre": "Double Cookies",
                "precio": 20,
                "stock": 200,
                "img": "0308.jpg",
                "descripcion": "Double Cookies Feminized es un híbrido índico/sativo de muy fácil cultivo, gran producción y repleta de tricomas por la herencia de su padre.  variedad presenta un alto THC (25% – 27%) lo que la hacen una variedad perfecta para extracciones.",
                "web": "https://bsfseeds.com/es/tienda/double-cookies/",
                "cantidad": 0
            },

            {
                "id": 3,
                "nombre": "Pinneapple Express",
                "precio": 30,
                "stock": 200,
                "img": "IMG_0325.JPG",
                "descripcion": "Pineapple Larry OG, un híbrido de predominancia sativa, hijo del cruce de Cinderella 99 del famoso banco Brothers Grimm de Color seleccionada en 2003 por nosotros mismos; con Super Lemon Larry OG IBL de Alpine Seeds, banco suizo de gran prestigio.",
                "web": "https://bsfseeds.com/es/tienda/pineapple-larry-og/",
                "cantidad": 0
            },
            {
                "id": 4,
                "nombre": "Lebron Haze",
                "precio": 40,
                "stock": 200,
                "img": "IMG_0330.JPG",
                "descripcion": "Lebron Haze es nuestro nuevo híbrido sativo con increíble sabor a limón inciensado y madera de cedro, cuya resina cubre toda sus flores, ideal para coleccionistas principiantes como experimentados.",
                "web": "https://bsfseeds.com/es/tienda/lebron-haze/",
                "cantidad": 0
            },
            {
                "id": 5,
                "nombre": "Radical Juice",
                "precio": 50,
                "stock": 0,
                "img": "IMG_0579.JPG",
                "descripcion": "Los terpenos más radicales los traen Radical Juice. En este cruce de Tropicana Cookies x Runtz, encontrareis una mezcla de fuertes terpenos afrutados siguiendo hype de los últimos años. Una planta ideal para flores o extracciones. Una explosión de aromas y sabores que cautivará a la mayoría de usuarios.",
                "web": "https://www.ripperseeds.com/es/feminizadas/radical-juice-semillas-feminizadas-de-marihuana",
                "cantidad": 0
            },
            {
                "id": 6,
                "nombre": "Sour Ripper",
                "precio": 60,
                "stock": 0,
                "img": "IMG_0589.JPG",
                "descripcion": "Tras mucho esfuerzo podemos introducir en nuestro catálogo una de las variedades más apreciadas por los coleccionistas de genéticas. Hemos trabajado para conseguir una de las pocas lineas de Sour Diesel en versión feminizada conservando las principales cualidades de una buena Sour D: Sabor y potencia.",
                "web": "https://www.ripperseeds.com/es/feminizadas/sour-ripper-semillas-feminizadas-de-marihuana",
                "cantidad": 0
            }

        ]


        let geneticasEnstock = geneticas.filter(prod => prod.stock > 0);
        let geneticasSinstock = geneticas.filter(prod => prod.stock <= 0);
        console.log(geneticasEnstock)
        console.log(geneticasSinstock)
        this.cargarGeneticasEnstock(geneticasEnstock);
        this.cargarGeneticasSinstock(geneticasSinstock);
    }





    cargarGeneticasEnstock(geneticas) {

        const divGeneticasEnstock = document.querySelector("#FloresFrescas");
        divGeneticasEnstock.innerHTML = "";

        if (geneticas.length == 0) {

            this.mostrarHeader("No se han encontrado genéticas");
            return false;
        } else {

            geneticas.forEach((genetica) => {

                const { id, nombre, precio, img, descripcion } = genetica

                let gen = document.createElement("div");
                gen.classList.add('card', 'mb-4', 'shadow-lg');
                gen.id = "row_" + id;

                gen.innerHTML = `
                <img  src="./../img/cards/${img}" class="card-img-top" alt="${nombre}">
                <div class="card-body d-flex flex-column">
                    <div>
                        <h5 class="card-title">${id}.${nombre}</h5>
                        <p class="card-text">${descripcion}</p>
                    </div>
                    <input type="cantidad" class="form-control" id="exampleFormControlInput" placeholder="Gramos">
                    <a href="javascript:addCarrito(${id})"
                        class="btn btn-secondary" id = "precio">Agregar $${precio} x g.</a>
                </div> `;


                divGeneticasEnstock.appendChild(gen);



            });


        }




    }

    cargarGeneticasSinstock(geneticas) {

        const divGeneticasSinstock = document.querySelector("#ViejasPasiones");
        divGeneticasSinstock.innerHTML = "";

        if (geneticas.length == 0) {

            this.mostrarHeader("No se han encontrado genéticas");
            return false;
        } else {

            geneticas.forEach((genetica) => {

                const { id, nombre, precio, img, descripcion, web } = genetica

                let gen = document.createElement("div");
                gen.classList.add('card', 'mb-4', 'shadow-lg');

                gen.innerHTML = `
                <img  src="./../img/cards/${img}" class="card-img-top" alt="${nombre}">
                <div class="card-body d-flex flex-column">
                    <div>
                        <h5 class="card-title">${id}.${nombre}</h5>
                        <p class="card-text">${descripcion}</p>
                    </div>
                    <a href="${web}"
                        class="btn btn-secondary">Web Oficial</a>
                </div> `;


                divGeneticasSinstock.appendChild(gen);



            });


        }




    }

    mostrarHeader(msg) {
        Swal.fire({
            icon: 'error',
            title: 'Nou Nou',
            text: msg
        })
    }

    cargarCarrito(carrito_existente){
        let carrito = carrito_existente.map((gen_existente) => {
            return new Genetica(gen_existente.id, gen_existente.nombre, gen_existente.precio,gen_existente.img, gen_existente.cantidad)
        })
        console.log(carrito)
    return carrito
    }

    actualizarCarrito() {

        this.actualizarContador();
        this.mostrarCarrito();
        this.guardarCarrito();

    }


    mostrarCarrito() {

        let detalleCarrito = document.querySelector("#idCarrito");
        detalleCarrito.innerHTML = "";
        let total = 0;

        carrito.forEach((genetica) => {


            const { id, nombre, precio, img, cantidad } = genetica;

            const row = document.createElement("div");
            row.classList.add("row");
            let subtotal = parseInt(precio) * cantidad;
            total += subtotal
            row.innerHTML = `
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <img src="${img}" width="80"/>
                        </div>

                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            ${nombre}
                        </div>

                        <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                        ${cantidad}g - $ ${subtotal}
                        </div>     
                        <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                        <a href="javascript:eliminar(${id})">
                            <i class="fa-solid fa-square-minus fa-2x"></i>
                            </a>       
            `;
            detalleCarrito.append(row);
        })


        let row = document.createElement("div");
        row.classList.add("row");

        row.innerHTML = `
                     <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                        Total a pagar:
                    </div>
                    <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                        <b> $ ${total}</b>
                    </div>
                    
                    `;


        detalleCarrito.appendChild(row);

    }



    actualizarContador() {

        let totalCarrito = this.contarProductos();

        let countCarrito = document.querySelector("#badgeCarrito");
        countCarrito.innerHTML = totalCarrito;

    }

    contarProductos() {

        let contarProductos = 0;

        carrito.forEach((genetica) => {

            contarProductos = contarProductos + parseInt(genetica.cantidad);

        })


        return contarProductos;
    }

    guardarCarrito() {
        localStorage.setItem(key_carrito, JSON.stringify(carrito))
        const dt = DateTime.now()
        let date = dt.toLocaleString()
        localStorage.setItem(key_actualizacion, date)
    }


    eliminarProducto(id) {


        //si confima proceso a eliminar
        Swal.fire({

            title: "Esta seguro de eliminar el producto ?",
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonText: "Si, eliminarlo",
            cancelButtonText: "Cancelar, toque sin querer!",

        }).then((result) => {


            if (result.isConfirmed) {

                carrito = carrito.filter(articulo => articulo.id != id);
                this.actualizarCarrito();

                //notidico de la eliminacion
                Toastify({

                    text: "Producto eliminado con exito",
                    duration: 2000,
                    gravity: "bottom"

                }).showToast();

            }
        })
    }


}