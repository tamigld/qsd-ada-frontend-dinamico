

// const elementsByTagName = document.getElementsByTagName('p');

// console.log(elementsByTagName);

// const elementsByClassName = document.getElementsByClassName('paragrafo01');

// console.log(elementsByClassName);

// const elementById = document.getElementById("teste");

// console.log(elementById);

// const elementByName = document.getElementsByName('paragrafo03');

// console.log(elementByName);

// const elementsByQuerySelector = document.querySelector('section#form-section');

// console.log(elementsByQuerySelector);

// const elementsByQuerySelector = document.querySelectorAll('p');

// elementsByQuerySelector.forEach(element => console.log(element));


// const primeiroParagrafo = document.querySelector('p');
// //console.log(primeiroParagrafo);

// console.log(primeiroParagrafo.textContent);


// primeiroParagrafo.innerHTML = "Novo texto para o <strong>texto em negrito</strong> parágrafo 01";

// console.log(primeiroParagrafo);


// const inputName = document.querySelector('input');

// console.log(inputName);

// inputName.value = 23;


// const primeiroParagrafo = document.querySelector('p');
// primeiroParagrafo.innerHTML = "Novo texto para o <strong>texto em negrito</strong> parágrafo 01";

// primeiroParagrafo.innerHTML = primeiroParagrafo.innerHTML + `<div> Test</div>`;

// const lista = document.querySelector('ul');

// console.log(lista);

// const novoItem = document.createElement('li');

// novoItem.textContent = 'Item 04';

// lista.appendChild(novoItem);

// const itensDaLista = document.querySelectorAll('li');

// console.log(itensDaLista);

// const novoItem02 = document.createElement('li');

// novoItem02.textContent = 'Item 05';

// lista.insertBefore(novoItem02, itensDaLista[3]);

// lista.removeChild(itensDaLista[1]);

// lista.remove();

// const botao = document.querySelector('button');

// const inputValue = document.querySelector('input#input');

// const lista = document.querySelector('ul');



// inputValue.addEventListener('input', (event) =>{
//     console.log(event.target.value);
// })


// const  alerta = () => {
//     window.alert('O botão foi clicado');
// }



// botao.addEventListener("click", alerta);



// const botao = document.querySelector('button');

// const inputValue = document.querySelector('input#input');

// const lista = document.querySelector('ul');

// const elementos = document.querySelectorAll('li');

// TO-DO - O código abaixo precisa ser refatorado por tal coisa.

// botao.addEventListener("click", () => {
//     let elemento = document.createElement('li');
//     elemento.innerHTML = inputValue.value
//     lista.appendChild(elemento);
// })

// ID - 1 , 2, 3, 6, 23, 1, 1 - auto incremento 
// tarefa concluída = booleano - true or false S/N s = true, n = false  Sim, SIM, sIM, COm certeza, Não não Nopes no;

// Event Listener - Escutador de Eventos


// const addButton = document.querySelector('button');

// const inputField = document.querySelector('input');

//console.log(addButton);

// addButton.addEventListener("click", () => {
//     alert('Botão adicionar clicado');
// });

// addButton.addEventListener("mouseover", () => {
//     console.log('O mouse passou por cima do botão');
// });

// addButton.addEventListener("mouseleave", () =>{
//     console.log('O mouse saiu de cima do botão');
// });

// inputField.addEventListener("focus", () => {
//     console.log("O input foi focado");
// });

// inputField.addEventListener("focusout", () => {
//     console.log("O input deixou de ser focado");
// });

// inputField.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });

// console.log(inputField);

// const styleTag = document.createElement('style');

// styleTag.innerHTML = `
//     body {
//         background-color: red
//     }
// `;

// const headTag = document.querySelector('head');

// headTag.appendChild(styleTag);


// const body = document.querySelector('body');

// const button = document.querySelector('button');


// button.addEventListener('click', () => {
//     body.style.backgroundColor = 'red';
// })

// button.addEventListener('mouseover', () => {
//    button.style.backgroundColor = 'blue';
// })

// button.addEventListener('mouseleave', () => {
//     button.style.backgroundColor = '#efefef';
// })


const addButton = document.querySelector('button');
const inputField = document.querySelector('input');
const list = document.querySelector('ul');


const removeItem = (event) => {
    list.removeChild(event.target.parentElement);
}

let audio = new Audio('mouse-click.mp3');

addButton.addEventListener('click', () => {
    if (inputField.value.length <= 2) {
        alert('O nome do item deve ter pelo menos 3 letras')
    } else {

        let item = document.createElement('li');
        let checkBoxItem = document.createElement('input');
        let textItem = document.createElement('span');
        let removeButton = document.createElement('button');
        let audioSource = document.querySelector('audio');


        textItem.textContent = inputField.value;
        checkBoxItem.setAttribute('type', 'checkbox');
        checkBoxItem.addEventListener('click', (event) =>{
            if(event.target.checked) {
                textItem.style.textDecoration = 'line-through';
                //audio.play();
                audioSource.play();
            } else {
                textItem.style.textDecoration = 'none';
                //audio.play();
                audioSource.play();
            }
        })
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', removeItem)

        item.insertAdjacentElement('beforeend', checkBoxItem);
        item.insertAdjacentElement('beforeend', textItem);
        item.insertAdjacentElement('beforeend', removeButton);
        list.appendChild(item);

        inputField.value = "";
        
    }
});

