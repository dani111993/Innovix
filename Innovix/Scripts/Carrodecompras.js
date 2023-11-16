// Función para agregar un producto al carrito
function agregarAlCarrito(producto, precio) {
    const listaCarrito = document.getElementById('lista-carrito');
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = `${producto} - $${precio}`;
  
    // Crear botón para eliminar el producto del carrito
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('eliminar');
    botonEliminar.onclick = function() {
      listaCarrito.removeChild(nuevoItem);
      recalcularTotal(); // Recalcular el total al eliminar un producto
    };
    nuevoItem.appendChild(botonEliminar);
  
    listaCarrito.appendChild(nuevoItem);
    recalcularTotal();
  }
  
  // Función para recalcular el total del carrito
  function recalcularTotal() {
    let total = 0;
    const listaCarrito = document.getElementById('lista-carrito');
    const itemsCarrito = listaCarrito.getElementsByTagName('li');
    for (let i = 0; i < itemsCarrito.length; i++) {
      const precioItem = parseInt(itemsCarrito[i].textContent.split('- $')[1]);
      total += precioItem;
    }
    document.getElementById('total').textContent = `Total: $${total}`;
  }

  