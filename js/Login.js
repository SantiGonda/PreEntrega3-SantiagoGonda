class Login {
    constructor(user, pass) {
        this.user = user;
        this.pass = pass;
        this.is_adm = false;
        this.socio = null;
    }

    getDatos() {
        return this.user + " - " + this.pass;
    }

    getUser() {
        return this.user;
    }

    getPass() {
        return this.pass;
    }

    setSocio(socio) {
        this.socio = socio;
    }

    getSocio() {
        return this.socio;
    }

    setAdmin(validacion) {
        return this.is_adm = validacion
    }
    setUser(nuevo_user) {
        return this.user = nuevo_user
    }
    setPass(nueva_pass) {
        return this.pass = nueva_pass

    }
}