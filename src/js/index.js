/* 
OBJETIVO 1: Quando clicar na tecla avançar, deve mostrar o proximo       cartão.

- Passo 1: dar um jeito de pegar o elemento html da seta e avançar.

- Passo 2: identetificar o clique do usuário na seta avançar.

- Passo 3: Fazer aparecer o proximo cartão aparecer da lista

- Passo 4: Buscar o cartão que está selecionado e esconder

**************************************************************

OBJETIVO 2: 

- Passo 1: dar um jeito de pegar o elemento html da seta e voltar.

- Passo 2: identetificar o clique do usuário na seta voltar.

- Passo 3: Fazer aparecer o proximo cartão aparecer da lista

- Passo 4: Buscar o cartão que está selecionado e esconder

*/

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado');
}

function mostraCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}


btnAvancar.addEventListener('click', function () {
    
    if(cartaoAtual === cartoes.length - 1) return;
   
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostraCartao(cartaoAtual);
})



btnVoltar.addEventListener('click', function () {
    
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostraCartao(cartaoAtual);
    
})