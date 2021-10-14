class Producto{
    constructor(precio,nombre,stock){
        this.precio = precio;
        this.nombre = nombre;
        this.stock = stock;
    }
}

let producto1 = new Producto(480,"collar", 4);
let producto2 = new Producto(400,"esmalte", 5);
let producto3 = new Producto(300,"aros", 12);
let producto4 = new Producto(500,"velas", 6);

let Galeria = [producto1, producto2, producto3, producto4];
console.log(Galeria)

let Carrito = [];
let suma = 0;

function main(){
    let opcion = mostrarProductos();

    while(opcion != 0){
        switch(opcion){
            case 1:
                alert("Agregaste una " + Galeria[0].nombre)
                agregarProducto(Galeria[0])
                suma = suma + Galeria[0].precio;
                break;

            case 2:
                alert("Agregaste una "+ Galeria[1].nombre)
                agregarProducto(Galeria[1]);
                suma = suma + Galeria[1].precio;
                break;
            case 3:
                alert("Agregaste una " + Galeria[2].nombre)
                agregarProducto(Galeria[2])
                suma = suma + Galeria[2].precio;
                break;

            case 4:
                alert("Agregaste una "+ Galeria[3].nombre)
                agregarProducto(Galeria[3]);
                suma = suma + Galeria[3].precio;
                break;

            default:
                alert("Ingreso incorrecto");
                break;
        }

        opcion = mostrarProductos();
    }
console.log(Carrito);
console.log(suma)
}

function mostrarProductos(){
    let opcion = parseInt(prompt("SELECCIONE PRODUCTO, presione 0 para salir:\n\n 1- collar, presione 1\n\n 2- esmalte, presione 2 \n\n 3- aros, presione 3\n\n 4- velas, presione 4" ));
    return opcion;
}

function agregarProducto(producto){
    Carrito.push(producto);
}


main();