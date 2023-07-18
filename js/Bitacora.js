class Bitacora {
    constructor() {
        this.fecha = new Date();
        this.registros = new Array();
    }

    addRegistro(registro) {
        this.registros.push(registro);
    }

    mostrarBitacora() {
        let registros ="" ;
        this.registros.forEach((r) => {registros += r.getDescripcion() + "\n"; }
        );
        alert(registros);
    }
}