function getMachineChoice() {
    const choices = ["Pedra", "Papel", "Tesoura"];
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(choices[randomNumber])
    return choices[randomNumber];
}

let countUser = 0
let countMachine = 0

let buttonRock = document.getElementById('rock')
let buttonPaper = document.getElementById('paper')
let buttonScissor = document.getElementById('scissor')
let containerCountUser = document.querySelector('.user-points')
let containerCountMachine = document.querySelector('.machine-points')
let image = document.getElementById('imagem')
let textMachinePlay = document.querySelector('.card > span')
let effectMachine = document.getElementById('effectPlay')
let message = document.querySelector('#message p')


const pointMachine = (userChoice, machineChoice) => {
    setTimeout(() => {
        message.innerHTML = `${userChoice} perde de ${machineChoice}!`
        countMachine++
        containerCountMachine.innerHTML = countMachine
    }, 600);
}

const pointUser = (userChoice, machineChoice) => {
    setTimeout(() => {
        message.innerHTML = `${userChoice} ganha de ${machineChoice}!`
        countUser++
        containerCountUser.innerHTML = countUser
    }, 600);
}

const noPoints = () => {
    setTimeout(() => {
        message.innerHTML = 'Empate!'
    }, 600);
}

const responseEffect = () => {
    effectMachine.style.backgroundColor = 'red'
    effectMachine.style.scale = '1.1'
    setTimeout(() => {
        effectMachine.style.scale = '1'
        effectMachine.style.backgroundColor = '#6B9DFF'
    }, 200);
}

function game(userChoice) {
    let machinePlay = getMachineChoice()
    responseEffect()

    if (machinePlay == 'Papel') {
        image.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-13a88.appspot.com/o/paper.png?alt=media&token=5c462c7a-ec20-49d8-9c0f-2189332ae076'
        textMachinePlay.innerHTML = 'Papel'
    } else if (machinePlay == 'Pedra') {
        image.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-13a88.appspot.com/o/rock.png?alt=media&token=e8f4bd24-1fec-4c08-b030-a8007fb6ebee'
        textMachinePlay.innerHTML = 'Pedra'
    } else {
        image.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-13a88.appspot.com/o/scissor.png?alt=media&token=dc716cc4-1056-4cd2-8cef-595e6b66ca65'
        textMachinePlay.innerHTML = 'Tesoura'
    }

    if (userChoice == 'Pedra' && machinePlay == 'Pedra') {
        noPoints()
    } else if (userChoice == 'Papel' && machinePlay == 'Papel') {
        noPoints()
    } else if (userChoice == 'Tesoura' && machinePlay == 'Tesoura') {
        noPoints()
    } 
    
    else if (userChoice == 'Pedra' && machinePlay == 'Tesoura') {
        pointUser(userChoice, machinePlay)
    } 
    
    else if (userChoice == 'Papel' && machinePlay == 'Pedra') {
        pointUser(userChoice, machinePlay)
    } 
    
    else if(userChoice == 'Tesoura' && machinePlay == 'Papel'){
        pointUser(userChoice, machinePlay)
    }
    
    else if (userChoice == 'Pedra' && machinePlay == 'Papel') {
        pointMachine(userChoice, machinePlay)
    } 
    
    else if (userChoice == 'Papel' && machinePlay == 'Tesoura') {
        pointMachine(userChoice, machinePlay)
    } 
    
    else if (userChoice == 'Tesoura' && machinePlay == 'Pedra') {
        pointMachine(userChoice, machinePlay)
    }
}

buttonRock.addEventListener('click', () => { game('Pedra') })
buttonPaper.addEventListener('click', () => { game('Papel') })
buttonScissor.addEventListener('click', () => { game('Tesoura') })