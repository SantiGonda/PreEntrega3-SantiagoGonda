class GestionarSocios {

    iniciar() {

        fetch(url)

            .then(respuesta => respuesta.json())
            .then(resultado => {

                socios = resultado.socios;

                this.cargarSocios(socios);
            })
    }

    cargarSocios(socios) {

        const divSocios = document.querySelector("#Socios");
        divSocios.innerHTML = "";

        if (socios.length == 0) {

            this.mostrarHeader("No se han encontrado socios");
            return false;
        } else {

            socios.forEach((socio) => {

                const { nro_socio, nombre, apellido, ci } = socio

                let sociedad = document.createElement("div");
                sociedad.classList.add('card');
                sociedad.id = "row_" + nro_socio;
                sociedad.innerHTML = `
                <div class="card-header">
                ${nombre} ${apellido}
                </div>
                <div class="card-body"><blockquote class="blockquote mb-0"><p>Socio Nº ${nro_socio}.
                </p>
                <footer class="blockquote-footer"> CI : ${ci} </footer></blockquote>
                </div>
                `;
                divSocios.appendChild(sociedad);
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

    buscar(valor) {
        let resultado = socios.filter(socio =>
            socio.nombre.toLowerCase().includes(valor.toLowerCase()) ||
            socio.ci.toLowerCase().includes(valor.toLowerCase()) ||
            socio.apellido.toLowerCase().includes(valor.toLowerCase()));
        this.cargarSocios(resultado);
    }

    /*
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
  */

}