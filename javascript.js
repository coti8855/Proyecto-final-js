carrito = []

$(".botonCompra").on("click", function(e){  
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
})



 $(".botonPrueba").on("click", function(){

  let lista = $(".listaCarrito")
  lista.fadeIn(3000)
  lista.animate ({height: "300px", width:"500px"}, "slow")
  lista.animate({height:"700px", width:"400px"}, "slow")
   lista.animate ({height: "300px", width:"500px"}, "slow")
   lista.fadeOut(4000)
 })