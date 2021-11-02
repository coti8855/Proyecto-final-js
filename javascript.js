
let botonCompra = document.querySelectorAll (".botonCompra")
console.log(botonCompra)

const carrito = []

for (let boton of botonCompra){
  boton.addEventListener ("click" , agregarCarrito) /*cada vez que se realiza click se ejecuta lo que aparece en agregarCarrito*/
}

function agregarCarrito(e){  
  let hijo = e.target;  /*e.target trae donde se realizo el click*/
  let padre = hijo.parentNode; /*parentNode nos trae el padre del elemento hijo, en este caso donde se realizo el click*/
  let img = padre.querySelector ("img").src;
  let parrafo = padre.querySelector ("p").textContent;
  let titulo = padre.querySelector ("h6").textContent;
  const producto = {
    nombre: titulo
  }

 
  console.log (img)
  console.log (parrafo)
  console.log (titulo)

   carrito.push(producto)
}

console.log(carrito)