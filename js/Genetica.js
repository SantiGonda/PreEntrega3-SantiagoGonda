class Genetica{
    constructor(id,nombre,precio){
        this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = false
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
}