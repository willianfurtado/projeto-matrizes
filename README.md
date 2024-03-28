# projeto-matrizes
 Projeto sobre matrizes


let buttonTransposta = document.querySelector("#transposta");

buttonTransposta.addEventListener('click', () => {
    console.log("clicou");

})



let exibeMatriz = (matriz) => {
    for(let i = 0; i < 3; i++) {
        let linha = "";
        for(let j = 0; j < 3; j++) {
            linha += matriz[i][j] + " ";
        }
        console.log(linha);
    }
}

let matriz = [
    [1, 2, 3],
    [3, 4, 5],
    [5, 7, 9]
];

const calcularTransposta = (matriz) => {
    const linhas = matriz.length
    const colunas = matriz[0].length
    
    let transposta = [];
    for(let j = 0; j < colunas; j++) {
        transposta[j] = [];
    }
    
    //Passando os elementos da matriz original para a matriz transposta
    for(let i = 0; i < linhas; i++) {
        for(let j = 0; j < colunas; j++) {
            transposta[j][i] = matriz[i][j];
        }
    }

    //Exibindo a transposta
    console.log("Transposta da matriz: ");
    for(let i = 0; i < linhas; i++){
        let linha = ""
        for(let j = 0; j < colunas; j++) {
            linha += transposta[i][j] + " ";
        }
        console.log(linha)
    }
} 

exibeMatriz(matriz);
console.log("\n")
calcularTransposta(matriz)
