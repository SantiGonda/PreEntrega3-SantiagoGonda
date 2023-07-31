class Genetica{
    constructor(id,nombre,precio,img,cantidad){
        this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = false
    this.img = img
    this.cantidad = cantidad


}

getDatos(){
    return this.id + "." + this.nombre + " - $ "+ this.precio + " x g";
}

setPrecio(nuevo_precio){
    return this.precio = nuevo_precio;
}

getStock(){
    return this.stock
}

setStock(validar){
return this.stock = validar;
}

getPrecio(){
    return this.precio
}

setImg(nueva_img){
    return this.img = nueva_img;
}
addCantidad(nueva_cant){
    return this.cantidad  = this.cantidad + nueva_cant;
}
}