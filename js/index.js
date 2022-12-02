`use strict`

/*
 * Berisso, Paula Daniela | Ramirez,Tatiana
 */


var productos = [];
const selectorUniversal = document.getElementById("infoproductos");
const infoCarrito=document.getElementById("carrito-contenedor");


function creaProducto() {

    let productoUno = new Producto( 
  
        "1", 
        "Gel de Limpieza",
        "limpieza",
        "El paso 2 para completar la limpieza de la piel, que deja el rostro limpio y listo para seguir tu rutina.",
        "1890",
        "1",
        "img/limpieza1.jpg"
    
    ) 
    
    productos.push(productoUno);
    
    let productoDos = new Producto( 
         
        "2", 
        "Refill Gel de Limpieza",
        "limpieza",
        "Recarga de Gel De Limpieza Doble Facial Apto Vegano",
        "3699",
        "1",
        "img/limpieza2.jpg"

    ) 
    
    productos.push(productoDos);
    
    let productoTres = new Producto (
        "3", 
        "Aceite Limpiador",
        "limpieza",
        "Aceite Limpiador Desmaquillante para Doble Limpieza",
        "3790",
        "1",
        "img/limpieza3.jpg"

    )
    
    productos.push(productoTres);
    
    let productoCuatro = new Producto (
        "4", 
        "Kit de Doble Limpieza",
        "limpieza",
        "Kit de Doble limpieza. Incluye aceite y gel de limpieza facial",
        "7390",
        "1",
        "img/limpieza4.jpg"

    )
    
    productos.push(productoCuatro);

    let productoCinco = new Producto (
        "5", 
        "Serum Balance Volumen 1",
        "serums",
        "Otorga balance, luminosidad y humectación a la piel.",
        "3790",
        "1",
        "img/serum1.jpg"
    
    )
    
    productos.push(productoCinco);

    let productoSeis = new Producto (
        "6", 
        "Serum Reparador Volumen 2",
        "serums",
        "Humecta, rellena y restaura la barrera de la piel.",
        "4190",
        "1",
        "img/serum2.jpg"

    )
    
    productos.push(productoSeis);

    let productoSiete = new Producto (
        "7", 
        "Aceite Facial Regenerador Volumen 3",
        "serums",
        "Renueva la apariencia de la piel, borrando líneas finas",
        "4190",
        "1",
        "img/serum3.jpg"
    
    )
    
    productos.push(productoSiete);
    
    let productoOcho = new Producto (
        "8", 
        "Tónico Exfoliante",
        "serums",
        "Tónico exfoliante facial con ácido salicílico y té verde",
        "4190",
        "1",
        "img/serum4.jpg"
    
    )
    
    productos.push(productoOcho);

    let productoNueve = new Producto (
        "9", 
        "Crema Facial defensa AM/PM",
        "tratamiento",
        "Crema facial humectante para todo tipo de piel",
        "3990",
        "1",
        "img/tratamiento1.jpg"
    
    )
    
    productos.push(productoNueve);

    let productoDiez = new Producto (
        "10", 
        "Máscara Hidratante nocturna",
        "tratamiento",
        "Hidrata y suaviza brindando luminosidad a la piel",
        "2390",
        "1",
        "img/tratamiento2.jpg"

    )
    
    productos.push(productoDiez);

    let productoOnce = new Producto (
        "11", 
        "Anti Roce Stick",
        "tratamiento",
        "Protege de las rozaduras provocadas por fricción",
        "2490",
        "1",
        "img/tratamiento3.jpg"

    )
    
    productos.push(productoOnce);

    let productoDoce = new Producto (
        "12", 
        "Contorno de ojos Energía",
        "tratamiento",
        "Crema de contorno de ojo con aplicador metálico",
        "2690",
        "1",
        "img/tratamiento4.jpg"

    )
    
    productos.push(productoDoce);

};

creaProducto();

pintaProductos(productos); 



// filtro 

let filtroBotones = document.querySelectorAll(".filter-btn")


filtroBotones.forEach(function (btn) {
     
    btn.addEventListener("click", function (e) {
     console.log(e.currentTarget.dataset.categoria);
      let category = e.currentTarget.dataset.categoria;
      let productoCategory = productos.filter(function (productoItem) {
       
         
        if (productoItem.categoria === category) {
            return productoItem
            ;
          
        }
      });

      if (category === "todos") {
        
        //limpia pantalla 
        selectorUniversal.innerHTML = "";
        
        pintaProductos(productos)
      } else {

          //limpia pantalla 
        selectorUniversal.innerHTML = "";
        pintaProductos(productoCategory);
       
      }
    });
  });


//selecciona productos en pantalla 

function pintaProductos(productos) {
    
    productos.forEach(producto => {
        
        
        selectorUniversal;

        let contieneProducto = document.createElement("div") 
        contieneProducto.setAttribute("class", "card", "class", "col-4");
        let imagen = document.createElement("img");
        imagen.setAttribute("src", `${producto.img}`);
        contieneProducto.appendChild(imagen) 
        selectorUniversal.appendChild(contieneProducto)
        let contieneProductoCard = document.createElement("div")
        contieneProductoCard.setAttribute("class", "card-body")
        contieneProducto.appendChild(contieneProductoCard) 
        let titulo = document.createElement("h2");
        titulo.setAttribute("class", "card-title") 
        let tituloTexto = producto.nombre;
        titulo.innerText = tituloTexto;
        contieneProductoCard.appendChild(titulo)
        let descripcion = document.createElement("p");
        descripcion.setAttribute("class", "card-text")
        let descripcionTexto = producto.descripcion;
        descripcion.innerText = descripcionTexto;
        contieneProductoCard.appendChild(descripcion);
        let categoria = document.createElement("p");
        let categoriaTexto = producto.categoria;
        categoria.innerText = categoriaTexto;
        contieneProductoCard.appendChild(categoria);
        let precio = document.createElement("p");
        precio.innerHTML = `$ ${producto.precio}`;
        precio.setAttribute("class", "fw-bold");
        contieneProductoCard.appendChild(precio);

        // agregar boton al carrito 
        let buttonAgregar = document.createElement("button");
        buttonAgregar.innerHTML = "Agregar al Carrito"
        contieneProductoCard.appendChild(buttonAgregar);
        buttonAgregar.setAttribute("class", "btn btn-secondary")
        buttonAgregar.setAttribute("id", `${producto.id}`)
        
        buttonAgregar.addEventListener("click", ()=> {
            agregar(producto.id)
        } ); 
        
        
    });
    
}
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

let contador=document.getElementById("contadorCarrito");
contador.innerHTML=carrito.length

// funcion agregar producto al carrito

function agregarItemCarrito(prodId) {
    carrito.forEach(item => {
        if (item.id === prodId){
            item.cantidad++
            contador.innerHTML=carrito.length

        }
        
    });
    
    contador.innerHTML=carrito.length

actualizarCarrito()
    
}

function agregar(prodId) {

    
    let prodExistente = carrito.some (prod => prod.id === prodId) 
    if (prodExistente) {

        let item = carrito.map (item => { 
            if (item.id === prodId){
                item.cantidad++
            }
           
        })
        contador.innerHTML=carrito.length

        
    } else {


        let item = productos.find((prod)=>prod.id===prodId)

 
        carrito.push(item);
        contador.innerHTML=carrito.length

    }

  
  
    actualizarCarrito()
    contador.innerHTML=carrito.length

}


// funcion actualizar  carrito 

function actualizarCarrito(item) {
    
   
   
    infoCarrito.innerHTML="";
    
    carrito.forEach(element => {

    infoCarrito;
    let div = document.createElement("div")
    div.setAttribute("class","card m-1  p-1")
    let info=document.createElement("p")
    let nombreProducto=document.createElement("p");
    let imagen = document.createElement("img");
    imagen.setAttribute("src", `${element.img}`);
    
    let precioProducto=document.createElement("p");
    let divDos = document.createElement("div");
    divDos.setAttribute("class", "fw-bold")
    let cantidadProducto= document.createElement("span");
    cantidadProducto.innerHTML=`Cantidad: ${element.cantidad}`;
    let buttonMas=document.createElement("button");
    let buttonMenos=document.createElement("button");
    let buttonEliminar=document.createElement("button");
    buttonMas.innerHTML="+";
    buttonMas.setAttribute("class", "btn btn-rosa m-1")
    buttonEliminar.innerHTML="Eliminar";
    buttonEliminar.setAttribute("class", "btn btn-lila m-1")
    buttonMenos.innerHTML="-";
    buttonMenos.setAttribute("class", "btn btn-rosado m-1")
    nombreProducto.innerHTML=`Producto: ${element.nombre}`;
    info.innerHTML= `id ${element.id}`;
    info.setAttribute("class", "d-none")
    precioProducto.innerHTML=`Precio $ ${element.precio}`;
    div.appendChild(info)
    div.appendChild(nombreProducto) 
    div.appendChild(imagen)
    div.appendChild(precioProducto) 
    divDos.appendChild(cantidadProducto)
    divDos.appendChild(buttonMas);
    divDos.appendChild(buttonMenos);
    divDos.appendChild(buttonEliminar);
    buttonEliminar.setAttribute("id", `${element.id}`)
    buttonMenos.setAttribute("id", `${element.id}`)
    buttonMas.setAttribute("id", `${element.id}`)
    div.appendChild(divDos)
    infoCarrito.appendChild(div)
    buttonEliminar.addEventListener("click", eliminar);
  
    buttonMas.addEventListener("click", ()=> {
        agregarItemCarrito(element.id)
    } ); 

    buttonMenos.addEventListener("click", ()=> {
        quitarItemCarrito(element.id)
    } ); 
    
    });

    vaciarCart=document.getElementById("vaciar-carrito");
    vaciarCart.addEventListener("click",  ()=> {
        vaciarCarrito()
    } ); 
    
    // incorporo productos al localstorage
    
    localStorage.setItem('carrito', JSON.stringify(carrito))


    contador.innerHTML=carrito.length

    

   //función sumar total carrito 
carritoTotal();
    
}


function eliminar(prodId) {

    let item = carrito.find((prod)=>prod.id===prodId)
    let indice = carrito.indexOf(item);

    carrito.splice(indice,1);

    actualizarCarrito()
    contador.innerHTML=carrito.length

}

function quitarItemCarrito(prodId) {
   

    let prodExistente = carrito.some (prod => prod.id === prodId) 
    
    if (prodExistente) {


        let item = carrito.map (item => { 
            if (item.id === prodId){
                item.cantidad--
                contador.innerHTML=carrito.length

            } 

            if (item.cantidad === 0) {
                let indice = carrito.indexOf(item);
                carrito.splice(indice,1);
                contador.innerHTML=carrito.length
                return
            }
        })

        console.log(carrito)

        actualizarCarrito()
        contador.innerHTML=carrito.length

}
 }



function carritoTotal(){
    
    let total = 0; 
    let itemCartTotal= document.getElementById("precioTotal");
    carrito.forEach((item) => {
        var precio = Number(item.precio.replace("Precio total: $", "")) 
        total = total + precio*item.cantidad;
        total.toFixed(2);
    })
    itemCartTotal.innerHTML = `total $ ${total}`
    itemCartTotal.setAttribute("class", "fs-3")
    contador.innerHTML=carrito.length

   
}

function vaciarCarrito() {
    carrito=[]
    actualizarCarrito()
    contador.innerHTML=carrito.length

}