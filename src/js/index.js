const inputAvaliacao = document.querySelectorAll('#li')

inputAvaliacao.forEach((item) => {
    item.addEventListener('click', (evento) => {
        console.log(evento.target);
    });
});


// console.log(valor);

// document.querySelector('#btn-submit').addEventListener('click', () => {
//     const inputAvaliacao = document.querySelectorAll('#li')

//     console.log(inputAvaliacao);

//     // if(inputAvaliacao){
//     //     console.log('sem avaliacao');
//     // }
// })