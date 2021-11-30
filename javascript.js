
          // Variables
          const baseDeDatos = [
              {
                  id: 1,
                  nombre: 'Cinturon',
                  precio: 489,
                  imagen: 'cinturon.jpg'
              },

              {
                  id: 2,
                  nombre: 'Scrunchie',
                  precio: 778,
                  imagen: 'scrunchies.jpg'
              },
              {
                  id: 3,
                  nombre: 'Vela',
                  precio: 280,
                  imagen: 'velas.jpg'
              },
              {            
                  id: 4,
                  nombre: 'mates',
                  precio: 400,
                  imagen: 'mate.jpg'
              },
              {
                  id: 5,
                  nombre: 'Esmalte',
                  precio: 400,
                  imagen: 'esmaltes.jpg'
              },
              {
                  id: 6,
                  nombre: 'Moño',
                  precio: 400,
                  imagen: 'moño.jpg'
              },
              {
                  id: 7,
                  nombre: 'Fresas',
                  precio: 400,
                  imagen: 'fresas.jpg'
              },
              {
                  id: 8,
                  nombre: 'Fresas',
                  precio: 400,
                  imagen: 'fresas.jpg'
              },
              {
                  id: 9,
                  nombre: 'Fresas',
                  precio: 400,
                  imagen: 'fresas.jpg'
              },
              {
                  id: 10,
                  nombre: 'Fresas',
                  precio: 400,
                  imagen: 'fresas.jpg'
              }
,
              {
                  id: 11,
                  nombre: 'Fresas',
                  precio: 400,
                  imagen: 'fresas.jpg'
              }
,
              {
                  id: 12,
                  nombre: 'Fresas',
                  precio: 400,
                  imagen: 'fresas.jpg'
              }


          ]
        
        const listaProductos = document.querySelector('.probando')
          baseDeDatos.forEach((info) => {
            let oNuevo = document.createElement ("div")
            oNuevo.classList.add(`opciones_cuadros`)
            listaProductos.appendChild(oNuevo)
            let imgNueva = document.createElement ("img")
             imgNueva.src= info.imagen    
             oNuevo.appendChild(imgNueva)
            let tituloNuevo = document.createElement ("h6")
             tituloNuevo.textContent = info.nombre
             tituloNuevo.classList.add(`titulos_opciones`)   
             oNuevo.appendChild(tituloNuevo)
             let parrafoNuevo = document.createElement ("p")
             parrafoNuevo.textContent = info.precio
             parrafoNuevo.classList.add(`parrafoNuevo`)   
             oNuevo.appendChild(parrafoNuevo)      
             let botonNuevo = document.createElement("button")
             botonNuevo.textContent = `AGREGAR`
             botonNuevo.classList.add (`button`)
             botonNuevo.dataset.id = info.id
             console.log(botonNuevo)
            
             oNuevo.appendChild(botonNuevo)
             oNuevo.addEventListener(`click`, function (e){
             if (e.target.classList.contains(`button`)){
  agregarCarrito(e.target.parentElement)
             }
})

          })
carrito = []
 const listaCarrito = document.querySelector (`.listaCarrito`)
const agregarCarrito= item =>{
  
    const productos = {  
    nombre:item.querySelector(`h6`).textContent,
    precio:item.querySelector(`p`).textContent,
    id: item.querySelector(`.button`).dataset.id,
    cantidad: 1
    }
     
     
   if(carrito.hasOwnProperty(productos.id)){
         
          productos.cantidad = carrito[productos.id].cantidad + 1
          
          
   }
   console.log(productos)
    let nuevoCarroo = document.createElement("p")
          let nuevoCarro = document.createElement("h6")
          nuevoCarro.textContent = productos.cantidad + " " + productos.nombre
          listaCarrito.appendChild(nuevoCarro)
          nuevoCarroo.textContent = productos.precio
          listaCarrito.appendChild(nuevoCarroo)


    carrito[productos.id] = {...productos} 
    console.log(carrito)
}
 

