const inputAvaliacao = document.querySelectorAll('#li')
const telaAvaliacao = document.getElementById('avaliacao')
const telaAgradecimento = document.getElementById('agradecimento')
let mensagemFinal = document.getElementById('mensagem-final')
let valorFinal;

inputAvaliacao.forEach((item) => {
    item.addEventListener('click', (evento) => {
        // item.classList.add('clicado')
        valor(evento.target.innerHTML);
    });
});

document.getElementById('btn-submit').addEventListener('click', () => {
    if(valorFinal){
        telaAvaliacao.classList.add('invisivel')
        telaAgradecimento.classList.remove('invisivel')
        console.log(mensagemFinal);
        mensagemFinal.innerHTML = `You selected ${valorFinal} out of 5`
        console.log(mensagemFinal);
    }
})

function valor(valor){
    return valorFinal = valor;
}