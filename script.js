document.addEventListener("DOMContentLoaded", () => {
    const productosLista = document.querySelector(".productos-lista");
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtener datos del formulario
        const nombre = document.querySelector("#nombre").value.trim();
        const precio = document.querySelector("#precio").value.trim();
        const imagen = document.querySelector("#imagen").files[0]; // Obtener archivo de imagen

        if (nombre && precio && imagen) {
            // Crear un producto dinámicamente
            const producto = document.createElement("div");
            producto.classList.add("producto");

            // Crear elemento para la imagen
            const imagenDiv = document.createElement("div");
            const imgTag = document.createElement("img");
            imgTag.alt = nombre;
            imgTag.style.width = "100%"; // Ajusta el tamaño según tu diseño
            imgTag.style.borderRadius = "8px";

            // Usar FileReader para mostrar la imagen subida
            const reader = new FileReader();
            reader.onload = (event) => {
                imgTag.src = event.target.result; // Asignar la URL de la imagen
            };
            reader.readAsDataURL(imagen); // Leer el archivo como Data URL
            imagenDiv.appendChild(imgTag);

            // Crear elementos para el nombre y precio
            const nombreP = document.createElement("p");
            nombreP.textContent = nombre;

            const precioP = document.createElement("p");
            precioP.innerHTML = `S/. ${parseFloat(precio).toFixed(2)} <span class="icono-borrar">🗑️</span>`;

            // Añadir funcionalidad para borrar
            precioP.querySelector(".icono-borrar").addEventListener("click", () => {
                producto.remove();
            });

            // Agregar todo al contenedor del producto
            producto.appendChild(imagenDiv);
            producto.appendChild(nombreP);
            producto.appendChild(precioP);

            // Añadir producto a la lista
            productosLista.appendChild(producto);

            // Limpiar formulario
            formulario.reset();
        } else {
            alert("Por favor, completa todos los campos obligatorios (nombre, precio e imagen).");
        }
    });
});
