class Producto {
    
    id;
    nombre;
    categoria;
    descripcion;
    precio;
    cantidad
    img;
    
    constructor(id, nombre, categoria, descripcion, precio, cantidad, img) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.img = img;

    }

    // json 
    toJSON(){
        return {
            "id": this.id,
            "nombre":this.nombre,
            "categoria": this.categoria,
            "img": this.img,
            "precio": this.precio,
            "cantidad": this.cantidad

        }
    }

}
