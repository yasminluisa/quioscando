var totalComidas = 0;
var totalBebidas = 0;
var totalGeral = 0;

function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    if (menu.style.display === 'none') {
        menu.style.display = 'block'; 
    } else {
        menu.style.display = 'none'; 
    }
}

function addItemToCart(itemName, itemPrice, type) {
    var cart = document.getElementById('carrinho-items');
    var totalBebidasElement = document.getElementById('total-bebidas');
    var totalComidasElement = document.getElementById('total-comidas');
    var totalElement = document.getElementById('total');

    var li = document.createElement('li');
    li.textContent = itemName + ' - R$' + itemPrice.toFixed(2);
    cart.appendChild(li);

    if (type === 'bebida') {
        totalBebidas += itemPrice;
        totalBebidasElement.textContent = totalBebidas.toFixed(2);
    } else {
        totalComidas += itemPrice;
        totalComidasElement.textContent = totalComidas.toFixed(2);
    }

    totalGeral = totalBebidas + totalComidas;
    totalElement.textContent = totalGeral.toFixed(2);
}
    function selecionarMesa(numeroMesa) {
        localStorage.setItem('mesaSelecionada', numeroMesa);
        var mesas = document.querySelectorAll('.mesa');
        mesas.forEach(function(mesa) {
            mesa.classList.remove('active');
        });
        var mesaSelecionada = document.querySelector('.mesa[data-mesa="' + numeroMesa + '"]');
        mesaSelecionada.classList.add('active');
        document.getElementById('finalizar-pedido').removeAttribute('disabled');
    }
    function limparPedido() {
        // Limpa o carrinho
        var cart = document.getElementById('carrinho-items');
        cart.innerHTML = "";
    
        // Reinicia os totais
        totalComidas = 0;
        totalBebidas = 0;
        totalGeral = 0;
    
        var totalBebidasElement = document.getElementById('total-bebidas');
        var totalComidasElement = document.getElementById('total-comidas');
        var totalElement = document.getElementById('total');
        totalBebidasElement.textContent = totalBebidas.toFixed(2);
        totalComidasElement.textContent = totalComidas.toFixed(2);
        totalElement.textContent = totalGeral.toFixed(2);
    }
    function finalizarPedido() { 
    var nomeGarcom = document.getElementById('nome-garcom').value; // Obtém o nome do garçom do campo de entrada
    var totalBebidas = parseFloat(document.getElementById('total-bebidas').textContent);
    var totalComidas = parseFloat(document.getElementById('total-comidas').textContent);
    var totalGeral = parseFloat(document.getElementById('total').textContent);
    var mesaSelecionada = localStorage.getItem('mesaSelecionada');
    
    var mensagem = 'Garçom: ' + nomeGarcom + '\nTotal de Bebidas: R$ ' + totalBebidas.toFixed(2) + '\nTotal de Comidas: R$ ' + totalComidas.toFixed(2) + '\nTotal Geral: R$ ' + totalGeral.toFixed(2);

    if (mesaSelecionada) {
        mensagem += "\nNúmero da Mesa: " + mesaSelecionada;
    }
    
    alert(mensagem);
}
