function crearTarjetaProducto(categoria, titulo, imagenUrl, descripcion, precio, imagenBoton) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("Producto", categoria);
    tarjeta.setAttribute("data-categoria", categoria);

    const tituloProducto = document.createElement("div");
    tituloProducto.classList.add("Titulo_Producto");
    const h2 = document.createElement("h2");
    h2.textContent = titulo;
    tituloProducto.appendChild(h2);
    tarjeta.appendChild(tituloProducto);

    const imagenProducto = document.createElement("div");
    const img = document.createElement("img");
    img.src = imagenUrl;
    img.alt = titulo;
    img.classList.add("Imagen_Producto");
    imagenProducto.appendChild(img);
    tarjeta.appendChild(imagenProducto);

    const descripcionProducto = document.createElement("div");
    descripcionProducto.classList.add("Descripcion_Producto");
    const p = document.createElement("p");
    p.textContent = descripcion;
    descripcionProducto.appendChild(p);
    tarjeta.appendChild(descripcionProducto);

    const footerTarjeta = document.createElement('div');
    footerTarjeta.classList.add('footer_tarjeta');

    const precioProducto = document.createElement('div');
    precioProducto.classList.add('Precio_Producto');
    const spanPrecio = document.createElement('span');
    spanPrecio.textContent = `$${precio}.-`;
    precioProducto.appendChild(spanPrecio);

    const botonCarrito = document.createElement('div');
    botonCarrito.classList.add('Boton_Agregar_Carrito');
    botonCarrito.style.flexGrow = "1";

    const boton = document.createElement('button');
    const imgBoton = document.createElement('img');
    imgBoton.src = '../Assets/Header/Carrito.png';
    imgBoton.alt = 'Agregar al carrito';
    imgBoton.classList.add('Boton_Imagen');

    boton.appendChild(imgBoton);
    boton.onclick = function() {
        alert(`${titulo} agregado al carrito.`);
    };
    
    botonCarrito.appendChild(boton);

    footerTarjeta.appendChild(precioProducto);
    footerTarjeta.appendChild(botonCarrito);

    tarjeta.appendChild(footerTarjeta);

    document.getElementById("contenedorTarjetas").appendChild(tarjeta);
}

    crearTarjetaProducto(
        "Cafeteria",
        "Café Expreso",
        "/Assets/Cafeteria/Cafe_Expreso.jpeg",
        "Café espresso puro, fuerte y aromático, para los que buscan un sabor intenso.",
        "2.400"
    );
    crearTarjetaProducto(
        "Cafeteria",
        "Café Americano",
        "/Assets/Cafeteria/Cafe_Americano.jpg",
        "Café espresso diluido con agua caliente, suave y amargo.",
        "3.000"
    );
    crearTarjetaProducto(
        "Cafeteria",
        "Café Cortado",
        "/Assets/Cafeteria/Cafe_Cortado.png",
        "Café espresso con un toque de leche caliente, suave y equilibrado.",
        "3.360"
    );
    crearTarjetaProducto(
        "Cafeteria",
        "Café Capuchino",
        "/Assets/Cafeteria/Cafe_Capucchino.jpg",
        "Café espresso con leche vaporizada, espuma, canela y cacao.",
        "4.200"
    );
    crearTarjetaProducto(
        "Cafeteria",
        "Café Moca",
        "/Assets/Cafeteria/Cafe_Moca.jpg",
        "Café espresso combinado con chocolate y leche vaporizada, para un toque dulce y delicioso.",
        "4.800"
    );
    crearTarjetaProducto(
        "Cafeteria",
        "Flat White",
        "/Assets/Cafeteria/Cafe_Flat_White.jpg",
        "Café espresso con leche vaporizada y una capa suave de microespuma, bien cremoso.",
        "4.560"
    );
    crearTarjetaProducto(
        "Heladeria",
        "Torta Helada",
        "/Assets/Heladeria/Torta_Helada.jpg",
        "Deliciosa combinación de bizcochuelo y helado, ideal para celebraciones.",
        "6.600"
    );
    crearTarjetaProducto(
        "Heladeria",
        "Cucurucho",
        "/Assets/Heladeria/Cucurucho.jpg",
        "Helado servido en un crujiente cucurucho de galleta.",
        "3.600"
    );
    crearTarjetaProducto(
        "Heladeria",
        "Vasito de Helado",
        "/Assets/Heladeria/Vasito_de_Helado.jpg",
        "Porción individual de helado en vaso, ideal para llevar.",
        "4.200"
    );
    crearTarjetaProducto(
        "Heladeria",
        "Helado de 1/4 Kg",
        "/Assets/Heladeria/Cuarto_de_Helado.png",
        "Cuarto de kilo de tu helado favorito, perfecto para compartir.",
        "7.800"
    );
    crearTarjetaProducto(
        "Heladeria",
        "Helado de 1/2 Kg",
        "/Assets/Heladeria/Medio_Kilo.png",
        "Medio kilo de puro placer helado con tus sabores favoritos.",
        "13.200"
    );
    crearTarjetaProducto(
        "Heladeria",
        "Helado de 1 Kg",
        "/Assets/Heladeria/Kilo_de_Helado.png",
        "Un kilo de helado cremoso para disfrutar en familia o con amigos.",
        "24.000"
    );
    
    function mostrarCategoria(categoria) {
        const contenedor = document.getElementById('contenedorTarjetas');
        const tarjetas = document.querySelectorAll('.Producto');

        if (contenedor.classList.contains('mostrar') && contenedor.getAttribute('data-visible') === categoria) {
            contenedor.classList.remove('mostrar');
            setTimeout(() => { contenedor.style.display = 'none'; }, 300);
            contenedor.setAttribute('data-visible', '');
        } else {
            contenedor.style.display = 'grid';
            setTimeout(() => { contenedor.classList.add('mostrar'); }, 10);
            contenedor.setAttribute('data-visible', categoria);

            tarjetas.forEach(tarjeta => {
                if (tarjeta.getAttribute('data-categoria') === categoria) {
                    tarjeta.style.display = 'grid';
                } else {
                    tarjeta.style.display = 'none';
                }
            });
        }
    }


const videoSources = [
    "/Assets/Banner/Cafeteria_Borra.mp4",
    "/Assets/Banner/Helado_Salsa.mp4",
    "/Assets/Banner/Cafeteria_Interiores.mp4",
    "/Assets/Banner/Cafe_Servir.mp4",
    "/Assets/Banner/Helado_Cucharada.mp4"
];

let currentIndex = 0;
let isVideoAPlaying = true;

const videoA = document.getElementById("videoA");
const videoB = document.getElementById("videoB");

videoA.src = videoSources[currentIndex];
videoA.currentTime = 0;
videoA.play();

function playNextVideo() {
    currentIndex = (currentIndex + 1) % videoSources.length;
    const nextVideo = isVideoAPlaying ? videoB : videoA;
    const currentVideo = isVideoAPlaying ? videoA : videoB;

    nextVideo.src = videoSources[currentIndex];
    nextVideo.currentTime = 0;
    nextVideo.play();

    nextVideo.style.opacity = "1";
    currentVideo.style.opacity = "0";

    isVideoAPlaying = !isVideoAPlaying;
}

setInterval(playNextVideo, 10000);


