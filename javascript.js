
let botonCompra = document.querySelectorAll (".botonCompra")
console.log(botonCompra)

carrito = []
for (let boton of botonCompra){
  boton.addEventListener ("click" , agregarCarrito) 
}

function agregarCarrito(e){  
  let hijo = e.target;  
  let padre = hijo.parentNode; 
  let img = padre.querySelector ("img").src;
  let parrafo = padre.querySelector ("p").textContent;
  let titulo = padre.querySelector ("h6").textContent;

    $(".listaCarrito").append(`<p>Producto:${titulo} Precio: ${parrafo}</p>`)
  let producto = {

    nombre: titulo,
    precio: parrafo
  
  }

 
  console.log (img)
  console.log (parrafo)
  console.log (titulo)

   carrito.push(producto)
}

console.log(carrito)




 $(".botonPrueba").on("click", function(){

  let lista = $(".listaCarrito")
  lista.fadeIn(3000)
  lista.animate ({height: "300px", width:"500px"}, "slow")
  lista.animate({height:"700px", width:"400px"}, "slow")
   lista.animate ({height: "300px", width:"500px"}, "slow")
   lista.fadeOut(4000)
 })