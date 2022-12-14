
class mascota {
    constructor(id, nombre, raza, edad, precio) {
        this.id = id;
        this.nombre = nombre;
        this.raza = raza;
        this.edad = parseInt(edad);
        this.precio = parseInt(precio);

    }
}
// LISTA ORIGINAL DE MASCOTAS
let mascotas = [];
mascotas.push(new mascota(1, "bobi", "bulldog", 3, 11000));
mascotas.push(new mascota(2, "firulai", "golden", 2, 9000));
mascotas.push(new mascota(3, "colita", "labrador", 6, 13000,));
mascotas.push(new mascota(4, "toto", "poodle", 4, 6000));
mascotas.push(new mascota(5, "braulio", "pastor", 7, 16000));

// FUNCION PARA INGRESAR UNA MASCOTA NUEVA AL ARRAY MASCOTAS
// FUNCIONA
function mascotaNueva() {
    this.id = prompt("ingrese numero de identificación")
    this.nombre = prompt("nombre de la mascota");
    this.raza = prompt("ingrese raza");
    this.peso = parseInt(prompt("ingrese el peso"));
    this.precio = parseInt(prompt("ingrese precio"));

    mascotas.push(new mascota(this.id, this.nombre, this.raza, this.peso, this.precio))
    console.log(mascotas);
}



// FUNCIONA. Muestra el listado y da la opcion de elegir una mascota para adoptar. Error en linea 38. [object]
function mostrarListaConDatos() {
    mascotas.forEach(mascota => console.log(
        `numero: ${mascota.id} nombre: ${mascota.nombre} raza: ${mascota.raza} edad: ${mascota.edad} años precio: $${mascota.precio} `));
    let eleccion = prompt("elija que mascota quiere comprar");
    if (eleccion = mascotas.find(mascota => mascota.nombre === eleccion)) {
        console.log(`gracias por comprar a  ${JSON.stringify(eleccion)}`);
       let carrito = mascota.precio;
        console.log(`el total es de: $ ${carrito}`);
    } else {
        alert("ese nombre no esta en la lista");
    }
}

// FUNCIONA. TIENE UNA CONFIRMACION AL PRINCIPIO PARA ASEGURAR QUE SE QUIERE AGREGAR UNA NUEVA MASCOTA
function agregarMascota() {
    nuevoIngreso = prompt("desea agregar una nueva mascota? escriba 'si' para sumarla")
    if (nuevoIngreso == "si") {
        mascotaNueva();
        console.log(this.nombre + "ha sido agregado a la lista");
    } else {
        alert("ninguna mascota ingresada");
    }
}

// FUNCIONA
function cantidadMascotas() {
    console.log("hay " + mascotas.length + " mascotas en la lista")
}

// FUNCIONA  
function buscarMascota() {
    let buscar = prompt("escriba el nombre de la mascota a buscar");
    const resultado = mascotas.find((mascota) => mascota.nombre == buscar);
    console.log (JSON.stringify(resultado));
}

// FUNCIONA
function buscarRaza() {
    let buscarPorRaza = prompt("ingrese la raza");
    const resultado2 = mascotas.filter((mascota) => mascota.raza == buscarPorRaza);
    console.log(JSON.stringify(resultado2));
}