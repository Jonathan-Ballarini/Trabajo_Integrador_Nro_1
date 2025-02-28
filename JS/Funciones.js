const Productos = {
    Cafeteria: [
        { nombre: "Café", descripcion: "Café negro recién hecho", imagen: "/Assets/Cafeteria/Cafe1.jpg"},
        { nombre: "Capuchino", descripcion: "Espuma de leche y café" }
    ],
    Heladeria: [
        { nombre: "Helado de Vainilla", descripcion: "Suave y cremoso" },
        { nombre: "Helado de Chocolate", descripcion: "Con trozos de chocolate" }
    ]
};

function mostrarMenu(tipo) {
    const contenedor = document.getElementById("Productos");
    contenedor.innerHTML = "";
    
    Productos[tipo].forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <img src="${producto.imagen}" alt="">`;
        contenedor.appendChild(card);
    });
}


function crearTarjetaProducto(titulo, imagenUrl, descripcion) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('Producto');

    const tituloProducto = document.createElement('div');
    tituloProducto.classList.add('Titulo_Producto');
    const h2 = document.createElement('h2');
    h2.textContent = titulo;
    tituloProducto.appendChild(h2);
    tarjeta.appendChild(tituloProducto);

    const imagenProducto = document.createElement('div');
    const img = document.createElement('img');
    img.src = imagenUrl;
    img.alt = titulo;
    img.classList.add('Imagen_Producto');
    imagenProducto.appendChild(img);
    tarjeta.appendChild(imagenProducto);

    const descripcionProducto = document.createElement('div');
    descripcionProducto.classList.add('Descripcion_Producto');
    const p = document.createElement('p');
    p.textContent = descripcion;
    descripcionProducto.appendChild(p);
    tarjeta.appendChild(descripcionProducto);

    document.getElementById('contenedorTarjetas').appendChild(tarjeta);
}

crearTarjetaProducto("Café Expreso", "/Assets/Cafeteria/Cafe_Expreso.jpeg", "Café espresso puro, fuerte y aromático, para los que buscan un sabor intenso.");
crearTarjetaProducto("Café Americano", "/Assets/Cafeteria/Cafe_Americano.jpg", "Café espresso diluido con agua caliente, suave y amargo.");
crearTarjetaProducto("Café Cortado", "/Assets/Cafeteria/Cafe_Cortado.png", "Café espresso con un toque de leche caliente, suave y equilibrado.");
crearTarjetaProducto("Café Capuchino", "/Assets/Cafeteria/Cafe_Capucchino.jpg", "Café espresso con leche vaporizada y espuma de leche, cremoso y suave.");
crearTarjetaProducto("Café Moca", "/Assets/Cafeteria/Cafe_Moca.jpg", "Café espresso combinado con chocolate y leche vaporizada, para un toque dulce y delicioso.");
crearTarjetaProducto("Flat White", "/Assets/Cafeteria/Cafe_Flat_White.jpg", "Café espresso con leche vaporizada y una capa suave de microespuma, cremoso pero no tan espeso como un cappuccino.");
crearTarjetaProducto("Macchiato", "/Assets/Cafeteria/Cafe_Macchiato.jpg", "Café espresso con un toque de leche espumada en la parte superior, fuerte y ligeramente dulce.");



