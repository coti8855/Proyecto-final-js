class Productos {
	constructor (nombre, precio, stock){
		this.nombre = nombre
		this.precio = precio
		this.stock = stock
	}
}
let productos1 = new Productos ("fideos", 100, 23)
console.log (productos1)