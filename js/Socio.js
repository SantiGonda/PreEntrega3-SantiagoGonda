class Socio {
    constructor(nro_socio,nombre,apellido,ci){
        this.nro_socio = nro_socio ;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ci = ci ;
    }  

    getDatos(){
        return this.nro_socio + " - "+ this.nombre + " - " + this.apellido ;
    }

    getNombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
    getNombre(){
        return this.nAmbre
    }
    getApellido(){
        return this.apellido
    }
}
