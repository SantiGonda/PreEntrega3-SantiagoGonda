class RegistroBit {
    constructor(mensaje,usuario){
        this.mensaje = mensaje;
        this.usuario = usuario;
        this.fecha_hora = new Date();
    }   

    getFechaHoraString(){
        return this.fecha_hora.toLocaleString() ;
    }

    getDescripcion(){
        return this.mensaje + " - "+ this.usuario + " - " + this.getFechaHoraString() ;
    }
}
