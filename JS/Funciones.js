    function crearTarjetaProducto(categoria, titulo, imagenUrl, descripcion) {
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

    document.getElementById("contenedorTarjetas").appendChild(tarjeta);
    }

    crearTarjetaProducto(
    "Cafeteria",
    "Café Expreso",
    "/Assets/Cafeteria/Cafe_Expreso.jpeg",
    "Café espresso puro, fuerte y aromático, para los que buscan un sabor intenso."
    );
    crearTarjetaProducto(
    "Cafeteria",
    "Café Americano",
    "/Assets/Cafeteria/Cafe_Americano.jpg",
    "Café espresso diluido con agua caliente, suave y amargo."
    );
    crearTarjetaProducto(
    "Cafeteria",
    "Café Cortado",
    "/Assets/Cafeteria/Cafe_Cortado.png",
    "Café espresso con un toque de leche caliente, suave y equilibrado."
    );
    crearTarjetaProducto(
    "Cafeteria",
    "Café Capuchino",
    "/Assets/Cafeteria/Cafe_Capucchino.jpg",
    "Café espresso con leche vaporizada y espuma de leche, cremoso y suave."
    );
    crearTarjetaProducto(
    "Cafeteria",
    "Café Moca",
    "/Assets/Cafeteria/Cafe_Moca.jpg",
    "Café espresso combinado con chocolate y leche vaporizada, para un toque dulce y delicioso."
    );
    crearTarjetaProducto(
    "Cafeteria",
    "Flat White",
    "/Assets/Cafeteria/Cafe_Flat_White.jpg",
    "Café espresso con leche vaporizada y una capa suave de microespuma, cremoso pero no tan espeso como un cappuccino."
    );
    crearTarjetaProducto(
    "Heladeria",
    "Torta Helada",
    "/Assets/Heladeria/Torta_Helada.jpg",
    "Deliciosa combinación de bizcochuelo y helado, ideal para celebraciones."
    );
    crearTarjetaProducto(
    "Heladeria",
    "Cucurucho",
    "/Assets/Heladeria/Cucurucho.jpg",
    "Helado servido en un crujiente cucurucho de galleta."
    );
    crearTarjetaProducto(
    "Heladeria",
    "Vasito de Helado",
    "/Assets/Heladeria/Vasito_de_Helado.jpg",
    "Porción individual de helado en vaso, ideal para llevar."
    );
    crearTarjetaProducto(
    "Heladeria",
    "Helado de 1/4 Kg",
    "/Assets/Heladeria/Cuarto_de_Helado.png",
    "Cuarto de kilo de tu helado favorito, perfecto para compartir."
    );
    crearTarjetaProducto(
    "Heladeria",
    "Helado de 1/2 Kg",
    "/Assets/Heladeria/Medio_Kilo.png",
    "Medio kilo de puro placer helado con tus sabores favoritos."
    );
    crearTarjetaProducto(
    "Heladeria",
    "Helado de 1 Kg",
    "/Assets/Heladeria/Kilo_de_Helado.png",
    "Un kilo de helado cremoso para disfrutar en familia o con amigos."
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

    function validarEdades() {
        let edadDesde = document.getElementById("edad_desde").value;
        let edadHasta = document.getElementById("edad_hasta").value;
    
        if (edadDesde && edadHasta) {
            if (parseInt(edadHasta) < parseInt(edadDesde)) {
                alert("La edad hasta no puede ser menor que la edad desde.");
                document.getElementById("edad_hasta").value = "";
            }
        }
    }