class GestionarGeneticas {

    iniciar() {

        geneticas = [

            {
                "id" : 1,
                "nombre" : "Kryptonite",
                "precio" : 10,
                "stock" : "true",
                "img" : "IMG_0315.jpg",
                "descripcion" : "La Kryptonite de Pyramid Seeds es un fenotipo feminizado procedente de la Yumbolt, de predominancia sativa (80%), con hojas y flores esponjosas cubiertas por una fina capa de cristales. Se trata de una planta de predominancia sativa.",
                "web" : "https://www.pyramidseeds.com/es/fotodependientes/58-kryptonite.html"
            },
            {
                "id" : 2,
                "nombre" : "Double Cookies",
                "precio" : 20,
                "stock" : "true",
                "img" : "0308.jpg",
                "descripcion" : "Double Cookies Feminized es un híbrido índico/sativo de muy fácil cultivo, gran producción y repleta de tricomas por la herencia de su padre.  variedad presenta un alto THC (25% – 27%) lo que la hacen una variedad perfecta para extracciones.",
                "web" : ""
            },

            {
                "id" : 3,
                "nombre" : "Pinneapple Express",
                "precio" : 30,
                "stock" : "true",
                "img" : "IMG_0325.JPG",
                "descripcion" : "Pineapple Larry OG, un híbrido de predominancia sativa, hijo del cruce de Cinderella 99 del famoso banco Brothers Grimm de Color seleccionada en 2003 por nosotros mismos; con Super Lemon Larry OG IBL de Alpine Seeds, banco suizo de gran prestigio.",
                "web" : ""
            },
            {
                "id" : 4,
                "nombre" : "Lebron Haze",
                "precio" : 40,
                "stock" : "true",
                "img" : "IMG_0330.JPG",
                "descripcion" : "Lebron Haze es nuestro nuevo híbrido sativo con increíble sabor a limón inciensado y madera de cedro, cuya resina cubre toda sus flores, ideal para coleccionistas principiantes como experimentados.",
                "web" : ""
            },
            {
                "id" : 5,
                "nombre" : "Radical Juice",
                "precio" : 50,
                "stock" : "false",
                "img" : "IMG_0579.JPG",
                "descripcion" : "Los terpenos más radicales los traen Radical Juice. En este cruce de Tropicana Cookies x Runtz, encontrareis una mezcla de fuertes terpenos afrutados siguiendo hype de los últimos años. Una planta ideal para flores o extracciones. Una explosión de aromas y sabores que cautivará a la mayoría de usuarios.",
                "web" : ""
            },
            {
                "id" : 6,
                "nombre" : "Sour Ripper",
                "precio" : 60,
                "stock" : "false",
                "img" : "IMG_0589.JPG",
                "descripcion" : "Tras mucho esfuerzo podemos introducir en nuestro catálogo una de las variedades más apreciadas por los coleccionistas de genéticas. Hemos trabajado para conseguir una de las pocas lineas de Sour Diesel en versión feminizada conservando las principales cualidades de una buena Sour D: Sabor y potencia.",
                "web" : ""
            }

        ]


        let geneticasEnstock = geneticas.filter(prod => prod.stock == true);
        let geneticasSinstock = geneticas.filter(prod => prod.stock != true);
        this.cargarGeneticasEnstock(geneticasEnstock);
       // this.cargarGeneticasSinstock(geneticasSinstock);
    }

    /*Identificar - trabajr cn sus propiedades - relacionarlo a algo existente*/




    cargarGeneticasEnstock(geneticasEnstock) {

        const divGeneticasEnstock = document.querySelector("#FloresFrescas");
        divGeneticasEnstock.innerHTML = "";

        if (geneticas.length == 0) {

            this.mostrarHeader("No se han encontrado genéticas");
            return false;
        } else {

            geneticas.forEach((genetica) => {


                let id = genetica.id;
                let nombre = genetica.nombre;
                let precio = genetica.precio;
                let img = genetica.img;
                let descripcion = genetica.descripcion;
                let web = genetica.web;
                

                let gen = document.createElement("div");
                gen.classList.add('card', 'mb-4', 'shadow-lg');

                gen.innerHTML =`
                <img  src="./../img/cards/${img}" class="card-img-top" alt="Kryptonite" data-aos="zoom-in">
                <div class="card-body d-flex flex-column">
                    <div>
                        <h5 class="card-title">${id}.${nombre}</h5>
                        <p class="card-text">${descripcion}</p>
                    </div>
                    <a href="${web}"
                        class="btn btn-secondary">$${precio}</a>
                </div> `;


                divGeneticasEnstock.appendChild(gen);



            });


        }




    }


    mostrarHeader(msg) {


        const headerProductos = document.querySelector("#headerGeneticas");
        headerProductos.innerHTML = msg;

    }


    buscar(valor) {

        let resultado = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(valor.toLowerCase()) ||
            producto.descripcion.toLowerCase().includes(valor.toLowerCase()));
        this.cargarProductos(resultado);


    }




}