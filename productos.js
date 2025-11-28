const productos = [
  { id: 1, nombre: "Producto 1", precio: 5000, imagen: "img/p1.jpg" },
  { id: 2, nombre: "Producto 2", precio: 6500, imagen: "img/p2.jpg" },
  { id: 3, nombre: "Producto 3", precio: 8500, imagen: "img/p3.jpg" }
];

const contenedor = document.getElementById("productos");

productos.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}" />
    <h3>${p.nombre}</h3>
    <p>₡${p.precio}</p>
    <button class="btn-agregar" onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
  `;
  contenedor.appendChild(div);
});
