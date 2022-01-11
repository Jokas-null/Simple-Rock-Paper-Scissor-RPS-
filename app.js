document.addEventListener('DOMContentLoaded', function() {
    const ROCK = 0;
    const PAPER = 1;
    const SCISSORS = 2;

    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissor');
    const cpuImg = document.getElementById('cpu');
    const playerImg = document.getElementById('user');
    const resultText = document.getElementById('text');

    function play(userOption){
        const computerOption = Math.floor(Math.random() * 3);
        const result = calcResult(userOption,computerOption);

        playerImg.src =  convertToImg(userOption);
        cpuImg.src = convertToImg(computerOption);

        switch(result){
            case "Draw":
                resultText.innerHTML = "Draw";
                break;
            case "Player Wins":
                resultText.innerHTML = "You Win";
                break;
            case "Computer Wins":
                resultText.innerHTML = "You Lose";
                break;
        }

    }

    function calcResult(userOption, computerOption){
        if(userOption === computerOption){
            return "Draw";
        }else if(userOption === ROCK && computerOption === SCISSORS){
            return "Player Wins";
        }else if(userOption === PAPER && computerOption === ROCK){
            return "Player Wins";
        }else if (userOption === SCISSORS && computerOption === PAPER){
            return "Player Wins";
        }else if (userOption === ROCK && computerOption === PAPER){
            return "Computer Wins";
        }else if (userOption === PAPER && computerOption === SCISSORS){
            return "Computer Wins";
        }else if (userOption === SCISSORS && computerOption === ROCK){
            return "Computer Wins";
        }
    }

    function convertToImg(option){
        switch(option){
            case ROCK:
                return "img/rock.png";
            case PAPER:
                return "img/paper.png";
            case SCISSORS:
                return "img/scissor.png";
        }
    }

    rockBtn.addEventListener('click', () => {
        play(ROCK);
    });

    paperBtn.addEventListener('click', () => {
        play(PAPER);
    });

    scissorsBtn.addEventListener('click', () => {
        play(SCISSORS);
    });
});