function getMachineChoice() {
    const choices = ["Pedra", "Papel", "Tesoura"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

let countUser = 0;
let countMachine = 0;

let buttonRock = document.getElementById('rock');
let buttonPaper = document.getElementById('paper');
let buttonScissor = document.getElementById('scissor');
let containerCountUser = document.querySelector('.user-points');
let containerCountMachine = document.querySelector('.machine-points');
let image = document.getElementById('imagem');
let textMachinePlay = document.querySelector('.card > span');
let effectMachine = document.getElementById('effectPlay');
let message = document.querySelector('#message span');
let messageDontPlay = document.querySelector('main > span');
let buttons = document.querySelectorAll('.btn-def');
let modal = document.getElementById('modal');
let modalText = document.getElementById('modal-text');

const pointMachine = (userChoice, machineChoice) => {
    setTimeout(() => {
        message.style.backgroundColor = 'red';
        message.innerHTML = `${userChoice} perde de ${machineChoice}!`;
        countMachine++;
        containerCountMachine.innerHTML = countMachine;
        clearMessage();

        setTimeout(() => {
            if (countMachine == 10) {
                modal.style.visibility = 'visible'
                modal.style.opacity = 1
                modalText.innerHTML = 'Você perdeu!'

                setTimeout(() => {
                    location.reload();
                }, 8000);
            }
        }, 200);
    }, 600);
}

const pointUser = (userChoice, machineChoice) => {
    setTimeout(() => {
        message.style.backgroundColor = 'green';
        message.innerHTML = `${userChoice} ganha de ${machineChoice}!`;
        countUser++;
        containerCountUser.innerHTML = countUser;
        clearMessage();

        setTimeout(() => {
            if (countUser == 10) {
                modal.style.visibility = 'visible'
                modal.style.opacity = 1
                modalText.innerHTML = 'Você ganhou!'

                setTimeout(() => {
                    location.reload();
                }, 8000);
            }
        }, 200);
    }, 600);
}

const noPoints = () => {
    setTimeout(() => {
        message.style.backgroundColor = 'grey';
        message.innerHTML = 'Empate!';
        clearMessage();
    }, 600);
}

const clearMessage = () => {
    setTimeout(() => {
        message.style.backgroundColor = 'transparent';
        message.innerHTML = '';
    }, 2000);
}

const dontPlayNow = () => {
    buttons.forEach(button => {
        button.setAttribute("disabled", "")
        messageDontPlay.innerHTML = 'Espere a jogada terminar para jogar novamente.'
    });

    setTimeout(() => {
        buttons.forEach(button => {
            button.removeAttribute("disabled")
            messageDontPlay.innerHTML = ''
        });
    }, 2500);
}

const responseEffect = () => {
    effectMachine.style.backgroundColor = 'red';
    effectMachine.style.scale = '1.1';
    setTimeout(() => {
        effectMachine.style.scale = '1';
        effectMachine.style.backgroundColor = '#6B9DFF';
    }, 200);
}

function game(userChoice) {
    let machinePlay = getMachineChoice();
    responseEffect();
    
    if (machinePlay == 'Papel') {
        image.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-13a88.appspot.com/o/paper.png?alt=media&token=5c462c7a-ec20-49d8-9c0f-2189332ae076';
        textMachinePlay.innerHTML = 'Papel';
    } else if (machinePlay == 'Pedra') {
        image.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-13a88.appspot.com/o/rock.png?alt=media&token=e8f4bd24-1fec-4c08-b030-a8007fb6ebee';
        textMachinePlay.innerHTML = 'Pedra';
    } else {
        image.src = 'https://firebasestorage.googleapis.com/v0/b/rock-paper-scissors-13a88.appspot.com/o/scissor.png?alt=media&token=dc716cc4-1056-4cd2-8cef-595e6b66ca65';
        textMachinePlay.innerHTML = 'Tesoura';
    }
    
    if ((userChoice == 'Pedra' && machinePlay == 'Pedra') || 
    (userChoice == 'Papel' && machinePlay == 'Papel') ||
    (userChoice == 'Tesoura' && machinePlay == 'Tesoura')) {
        noPoints();
    } 
    
    else if ((userChoice == 'Pedra' && machinePlay == 'Tesoura') ||
    (userChoice == 'Papel' && machinePlay == 'Pedra') ||
    (userChoice == 'Tesoura' && machinePlay == 'Papel')){
        pointUser(userChoice, machinePlay);
    }
    
    else if ((userChoice == 'Pedra' && machinePlay == 'Papel') ||
    (userChoice == 'Papel' && machinePlay == 'Tesoura') ||
    (userChoice == 'Tesoura' && machinePlay == 'Pedra')) {
        pointMachine(userChoice, machinePlay);
    }
    
    dontPlayNow()
}

buttonRock.addEventListener('click', () => { game('Pedra') });
buttonPaper.addEventListener('click', () => { game('Papel') });
buttonScissor.addEventListener('click', () => { game('Tesoura') });