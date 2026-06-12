// --- CÓDIGO JAVASCRIPT (script.js) ---

// 1. Funcionalidade: Modo Escuro (Dark Mode)
const btnTema = document.getElementById('btnTema');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = "Alternar Modo Claro";
    } else {
        btnTema.textContent = "Alternar Modo Escuro";
    }
});

// 2. Funcionalidade: Lógica do Simulador Matemático
const btnCalcular = document.getElementById('btnCalcular');
const inputHectares = document.getElementById('hectares');
const resultadoBox = document.getElementById('resultado');

btnCalcular.addEventListener('click', () => {
    const ha = parseFloat(inputHectares.value);

    if (isNaN(ha) || ha <= 0) {
        alert("Por favor, digite uma quantidade de hectares válida maior que zero.");
        return;
    }

    const aguaEconomizada = ha * 40 * 4; 
    const areaSalva = ha * 10000 * 0.02; 

    document.getElementById('ecoAgua').textContent = aguaEconomizada.toLocaleString('pt-BR');
    document.getElementById('ecoArea').textContent = areaSalva.toLocaleString('pt-BR');

    resultadoBox.style.display = 'block';
});