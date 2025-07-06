// Mapeamento dos preços
const precos = {
    Hamburguer: 15,
    BatataFrita: 8,
    Refrigerante: 5,
    Milkshake: 10,
    Sanduiche: 12
};

// Lista de pedido e total
const orderList = document.getElementById("order-list");
const totalSpan = document.getElementById("total");

// Função para adicionar item
function adicionarItem(nome) {
    const li = document.createElement("li");
    li.innerHTML = `
        ${nome}
        <button class="remove-btn">Remover</button>
    `;
    orderList.appendChild(li);

    atualizarTotal();

    // Adiciona evento de remoção ao botão recém-criado
    li.querySelector("button").addEventListener("click", () => {
        li.remove();
        atualizarTotal();
    });
}

// Atualiza o total com base nos itens da lista
function atualizarTotal() {
    let total = 0;

    const itens = orderList.querySelectorAll("li");
    itens.forEach((li) => {
        const texto = li.textContent.replace("Remover", "").trim();

        if (precos[texto]) {
            total += precos[texto];
        }
    });

    totalSpan.textContent = total;
}

// Botões de adicionar
document.getElementById("addHamburguer").addEventListener("click", () => adicionarItem("Hamburguer"));
document.getElementById("addBatataFrita").addEventListener("click", () => adicionarItem("BatataFrita"));
document.getElementById("addRefrigerante").addEventListener("click", () => adicionarItem("Refrigerante"));
document.getElementById("addMilkshake").addEventListener("click", () => adicionarItem("Milkshake"));
document.getElementById("addSanduiche").addEventListener("click", () => adicionarItem("Sanduiche"));

// Botão Limpar Pedido
document.getElementById("clear-order").addEventListener("click", () => {
    orderList.innerHTML = "";
    atualizarTotal();
});

// Botão Finalizar Pedido
document.getElementById("finish-order").addEventListener("click", () => {
    if (orderList.children.length === 0) {
        alert("Seu pedido está vazio!");
    } else {
        alert("Pedido finalizado! Obrigado pela preferência.");
        orderList.innerHTML = "";
        atualizarTotal();
    }
});
