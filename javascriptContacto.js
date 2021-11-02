
let nombreUsuario = document.getElementById("nombreUsuario")
  let apellidoUsuario = document.getElementById("apellidoUsuario")
  let mailUsuario = document.getElementById("mailUsuario")
  let texto = document.getElementById("texto")

  let array =[]
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
    let arrayJSON = JSON.stringify (array)
    localStorage.setItem ("Usuarios", arrayJSON )
    

} else if (nombreUsuario.value == "" || apellidoUsuario.value == "" || mailUsuario.value == "" || texto.value == "") {
   let parrafoNuevo = document.createElement ("p")
   let cartel = document.getElementById ("cartel")
    parrafoNuevo.innerHTML = ("Error")
    cartel.appendChild (parrafoNuevo)
}


}

let boton1 = document.getElementById ("boton")
boton1.addEventListener ("click", formulario)