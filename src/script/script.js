// Função para criar uma matriz vazia
const criarMatrizVazia = () => {
    const matriz = [];
    for (let i = 0; i < 3; i++) {
        const linha = [];
        for (let j = 0; j < 3; j++) {
            linha.push(null); // Preenchendo a matriz com valores nulos inicialmente
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para extrair os valores dos inputs e criar a matriz original
const criarMatrizOriginal = () => {
    const matriz = [];
    for (let i = 1; i <= 3; i++) {
        const linha = [];
        for (let j = 1; j <= 3; j++) {
            const input = document.querySelector(`#ilinha${i}${j}`);
            linha.push(parseInt(input.value) || 0); // Convertendo o valor para inteiro ou 0 se for inválido
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para exibir a matriz no console (apenas para depuração)
const exibeMatriz = (matriz) => {
    for (let i = 0; i < 3; i++) {
        let linha = "";
        for (let j = 0; j < 3; j++) {
            linha += matriz[i][j] + " ";
        }
        console.log(linha);
    }
}

// Função para calcular a transposta da matriz
const calcularTransposta = (matriz) => {
    const linhas = matriz.length;
    const colunas = matriz[0].length;

    let transposta = [];
    for (let j = 0; j < colunas; j++) {
        transposta[j] = [];
    }

    // Preenchendo a matriz transposta
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            transposta[j][i] = matriz[i][j];
        }
    }

    // Atualizando os valores dos inputs com os valores da matriz transposta
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            const input = document.querySelector(`#ilinha${i}${j}`);
            input.value = transposta[i - 1][j - 1];
        }
    }
}

// Adicionando o evento de clique ao botão "Gerar transposta"
const buttonTransposta = document.querySelector("#transposta");
buttonTransposta.addEventListener('click', () => {
    event.preventDefault();
    const matrizOriginal = criarMatrizOriginal();
    calcularTransposta(matrizOriginal);
});

// Chamando a função para criar a matriz vazia quando a página carregar
window.addEventListener('DOMContentLoaded', () => {
    const matrizVazia = criarMatrizVazia();
    exibeMatriz(matrizVazia); // Exibindo a matriz vazia inicialmente (opcional)
});
