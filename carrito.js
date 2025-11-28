let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(id) {
  const producto = carrito.find(p => p.id === id);
  if (producto) {
    producto.cantidad++;
  } else {
    carrito.push({ id, cantidad: 1 });
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito");
}

function cargarCarrito() {
  const tabla = document.getElementById("tabla-carrito");
  tabla.innerHTML = "";
  carrito.forEach(item => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${item.id}</td>
      <td>${item.cantidad}</td>
    `;
    tabla.appendChild(fila);
  });
}
