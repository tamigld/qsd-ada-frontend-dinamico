const buttonAdd = document.querySelector('button')
const input = document.querySelector('input');
const list = document.querySelector('ul');

const removeItem = (event) => {
    list.removeChild(event.target.parentElement);
}

buttonAdd.addEventListener('click', () => {
    if(input.value < 1){
        alert("Digite o título da tarefa.")
    } else{
        let task = document.createElement('li')
        let textTask = document.createElement('span')
        textTask.innerHTML = input.value
    
        let removeButton = document.createElement('button');
        removeButton.style.marginLeft = '10px'
        removeButton.innerText = 'Remover'
        removeButton.addEventListener('click', removeItem);
    
        let checkBoxItem = document.createElement('input');
        checkBoxItem.setAttribute('type', 'checkbox');
        checkBoxItem.style.marginRight = '10px'

        checkBoxItem.addEventListener('click', (event) => {
            if(event.target.checked){
                textTask.style.textDecoration = 'line-through'
                textTask.style.opacity = '0.7'
            } else{
                textTask.style.textDecoration = 'none'
                textTask.style.opacity = '1'
            }
        })

        task.insertAdjacentElement('beforeend', removeButton)
        task.insertAdjacentElement('afterbegin', textTask)
        task.insertAdjacentElement('afterbegin', checkBoxItem)
        
        list.appendChild(task)
    }
})