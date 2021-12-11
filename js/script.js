function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
    
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            }
    }
    
    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Remis, spróbuj jeszcze raz!');
        } else {
            printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    
    let playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

const button_scissors = document.getElementById('button-scissors');
const button_rock = document.getElementById('button-rock');
const button_paper = document.getElementById('button-paper');
button_rock.addEventListener('click', function(){ buttonClicked('kamień'); });
button_paper.addEventListener('click', function(){ buttonClicked('papier'); });
button_scissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

