// function exterior(){

//     let mensagem = 'mensagem da funçao exterior';


//     function interior(){
//         console.log('Função interior');
//         console.log(mensagem);
//     }

//     return interior;
// }


// let minhaFuncao = exterior();

// minhaFuncao();


// function criarContador(){

//     let contador = 0;

//     function incrementar(){
//         contador++;
//         console.log('Contador incrementado para: ', contador);

//     }

//     function decrementar(){
//         contador--;
//         console.log('Contador decrementado para: ', contador);
//     }

//     function obterValor(){
//         return contador;
//     }

//     return {
//         incrementar : incrementar,
//         decrementar: decrementar,
//         obterValor: obterValor
//     };
// }


// let meuContador = criarContador();


// console.log(meuContador.obterValor());

// meuContador.incrementar();
// meuContador.incrementar();

// console.log(meuContador.obterValor());

// meuContador.decrementar();

// console.log(meuContador.obterValor());


// let meuContador02 = criarContador();

// console.log(meuContador02.obterValor());



// let nome = 'Francisco';

// let sobrenome = 'Fagundes';

// localStorage.setItem('nome', nome );

// console.log(localStorage.getItem('nome') + " " + sobrenome);

// let idade = 45;

// localStorage.setItem('idade', idade );

// console.log(localStorage.getItem('idade'));

// let idadeGuardada = JSON.parse(localStorage.getItem('idade'));


// let professor = {
//     nome: 'Francisco',
//     idade: 45
// }

// // JSON.stringfy ----- JSON para string

// localStorage.setItem('professor', JSON.stringify(professor));

// let professorGuardado = localStorage.getItem('professor');

// console.log(JSON.parse(professorGuardado).idade);


// const addButton = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// let shopList = [];

// const addItem = () => {
//     shopList.push(input.value);
//     localStorage.setItem('shopList', JSON.stringify(shopList));
//     input.value = '';
//     showList(shopList);
// }

// const removeItem = (event) => {
//     list.removeChild(event.target.parentElement);
// }

// const getShopList = () => {
//     let shopListStored = localStorage.getItem('shopList');
//     if (shopListStored) {
//         shopList = JSON.parse(shopListStored || '[]');
//     }
// }

// const showList = (itemList) => {
//     list.innerHTML = "";
//     itemList.forEach(element => {
//         let item = document.createElement('li');
//         let removeButton = document.createElement('button');
//         let itemText = document.createElement('span');

//         removeButton.textContent = 'Remover'
//         itemText.textContent = element;

//         removeButton.addEventListener('click', removeItem);

//         item.insertAdjacentElement('beforeend', itemText);
//         item.insertAdjacentElement('beforeend', removeButton);

//         list.appendChild(item);
//     });

// }

// addButton.addEventListener('click', addItem);

// getShopList();

// showList(shopList);



// setTimeout

// const delayHello = () => {

//     setTimeout(() => {
//         console.log('Hello Delay');
//     }, 2000);

//     console.log('Hello');

// }


// delayHello();


// const somarAsync = (numero01, numero02, callback) => {
//     setTimeout(() => {
//         if (callback) {
//             callback(numero01 + numero02)
//         };
//     }, 1000);
// }

// const callback = (resultado) => console.log(resultado);

//somarAsync( 5, 4, callback);

// somar 10 + 20 + 30 + 40 + 50

// somarAsync( 10, 20, (resultado01) => {
//     somarAsync( resultado01, 30, (resultado02) => {
//         somarAsync( resultado02, 40, (resultado03) => {
//             somarAsync(resultado03, 50, (resultadoFinal) =>{
//                 console.log(resultadoFinal);
//             })
//         } )
//     } ) 
// })


// const executarSempre = () => {
//     let contador = 0;
//     setInterval(() => {
//         contador ++;
//         console.log(contador);
//     }, 1000)
// }

// executarSempre();


// Promises - três estados - Pendente, Resolvida, Rejeitada


// const myPromise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         let success = false;
//         if(success) {
//             resolve('Operação concluída com sucesso');
//         } else {
//             reject('Houve um erro na operação');
//         }
//     }, 2000);
// });


// myPromise.then((resultado) => {
//     console.log('Sucesso: ', resultado);
// }).catch((erro) => {
//     console.log('Erro: ', erro);
// })


// const somarAsync = (numero01, numero02) => {

//     return new Promise((resolve, reject) => {
//         if (isNaN(numero01) || isNaN(numero02)) {
//             reject("Parâmetros de numero01 e numero02 devem ser números")
//         } else {
//             try {
//                  setTimeout(() => {
//                     resolve(numero01 + numero02);
//                     //console.log(numero01 + numero02)
//                  }, 1000);
//             } catch (error) {
//                 reject(error);
//             }

//         }
//     });

// }


// const calcular = async () => {
//     const resultado01 = await somarAsync(10,20);
//     const resultado02 = await somarAsync( resultado01, 30 );
//     const resultado03 = await somarAsync( resultado02, 40);
//     const resultadoFinal = await somarAsync( resultado03, 50);
//     console.log(resultadoFinal);
// }

// console.log('Antes de executar');
// calcular();


// somarAsync(10,20)
// .then((resultado01) => somarAsync(resultado01, 30))
// .then((resultado02) => somarAsync(resultado02, 40))
// .then((resultado03) => somarAsync(resultado03, 50))
// .then((resultadoFinal) => console.log(resultadoFinal))
// .catch((error) => console.log(error));


fetch('https://viacep.com.br/ws/01001000/json/')
    .then((response) => {
        response.json()
        .then((data) => {
            console.log(data);
        })
    })














