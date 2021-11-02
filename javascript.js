
let nombreUsuario = document.getElementById("nombreUsuario")
  let apellidoUsuario = document.getElementById("apellidoUsuario")
  let mailUsuario = document.getElementById("mailUsuario")
  let texto = document.getElementById("texto")

  array =[]
  console.log (array)
function formulario (e){
  
 e.preventDefault(e)
  if ( nombreUsuario.value != "" && apellidoUsuario.value != "" && mailUsuario.value != "" && texto.value != ""){
    console.log("Bienvenido " + nombreUsuario.value)
    let parrafo1 = document.createElement ("p")
  let cartel = document.getElementById ("cartel")
    parrafo1.innerHTML = ("Bienvenido/a " + nombreUsuario.value)
    cartel.appendChild (parrafo1)
    array.push({ nombre: nombreUsuario.value , apellido: apellidoUsuario.value , mail: mailUsuario.value , texto: texto.value})
    

} else if (nombreUsuario.value == "" || apellidoUsuario.value == "" || mailUsuario.value == "" || texto.value == "") {
   let parrafoNuevo = document.createElement ("p")
   let cartel = document.getElementById ("cartel")
    parrafoNuevo.innerHTML = ("Error")
    cartel.appendChild (parrafoNuevo)
}
}

let boton1 = document.getElementById ("boton")
boton1.addEventListener ("click", formulario)


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