document.addEventListener('DOMContentLoaded', function () {
    var pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    var pedidosList = document.getElementById('pedidos-list');

    pedidos.forEach(function (pedido) {
        var li = document.createElement('li');
        li.textContent = `Mesa ${pedido.mesa} - ${pedido.item} (${pedido.qt}x) - R$${pedido.price.toFixed(2)}`;
        pedidosList.appendChild(li);
    });
});
