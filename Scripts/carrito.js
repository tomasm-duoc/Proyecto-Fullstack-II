document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".btn-agregar");
    
    botonesAgregar.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Producto añadido al carrito con éxito.");
        });
    });
});