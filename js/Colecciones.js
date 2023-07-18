
//Socios
//Socio 1
let socio1 =  new Socio(1,"Santiago","Gonda","11");

//Socio 2
let socio2 =  new Socio(2,"Franco","Atay","22");

//Socio 3
let socio3 =  new Socio(3,"Santiago","Mallo","33");

//Socio 4
let socio4 =  new Socio(4,"Agustina","Mantovani","44");

//Socio 5
let socio5 =  new Socio(5,"Jennifer","Gonzalez","55");

let coleccion_socios = new Array();
coleccion_socios.push(socio1);
coleccion_socios.push(socio2);
coleccion_socios.push(socio3);
coleccion_socios.push(socio4);
coleccion_socios.push(socio5);


//Logines
let login1 = new Login("sgonda",'pass1234');
login1.setSocio(socio1);
login1.setAdmin(true)

let login2 = new Login("fatay",'pass1234');
login2.setSocio(socio2);
login2.setAdmin(true)

let login3 = new Login("smallo",'pass1234');
login3.setSocio(socio3);
login3.setAdmin(true)

let login4 = new Login("amantovani",'pass1234');
login4.setSocio(socio4);

let login5 = new Login("jgonzalez",'pass1234');
login5.setSocio(socio5);

let colleccion_logines = new Array();
colleccion_logines.push(login1);
colleccion_logines.push(login2);
colleccion_logines.push(login3);
colleccion_logines.push(login4);
colleccion_logines.push(login5);

//Genética

let gen1 = new Genetica(1,"Kryptonite",10)
gen1.setStock(true)

let gen2 = new Genetica(2,"Double cookies",20)
gen2.setStock(true)

let gen3 = new Genetica(3,"Pineapple Express",30)
gen3.setStock(true)

let gen4 = new Genetica(4,"Lebron Haze",40)
gen4.setStock(true)

let gen5 = new Genetica(5,"Radical Juice",50)

let gen6 = new Genetica(6,"Sour Ripper",60)

let colleccion_geneticas = new Array();
colleccion_geneticas.push(gen1);
colleccion_geneticas.push(gen2);
colleccion_geneticas.push(gen3);
colleccion_geneticas.push(gen4);
colleccion_geneticas.push(gen5);
colleccion_geneticas.push(gen6);

//Bitacora
let bitacora = new Bitacora();

