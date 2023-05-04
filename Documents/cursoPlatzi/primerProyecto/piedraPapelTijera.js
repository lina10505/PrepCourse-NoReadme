let player
let pc
let livesPlayer = 3
let livesEnemy = 3

function startGame()
{
    //let sectionAttack = document.getElementById("selectAttack")

    let buttonRock = document.getElementById("buttonRock")
    buttonRock.addEventListener("click", attackRock);
    let buttonPaper = document.getElementById("buttonPaper")
    buttonPaper.addEventListener("click", attackPaper);
    let buttonScissors = document.getElementById("buttonScissors")
    buttonScissors.addEventListener("click", attackScissors);

    let buttonRestart = document.getElementById("restart")
    buttonRestart.addEventListener("click", restartGame)
    buttonRestart.style.display = "none";
};

function attackRock()
{
    player = "Rock"
    randomEnemy()
};

function attackPaper()
{
    player = "Paper"
    randomEnemy()
};

function attackScissors()
{   
    player = "Scissors"
    randomEnemy()
};

function randomEnemy() 
{
    let attackRandom = random(1,3);
    if (attackRandom == 1) {
        pc = "Rock"
    } else if (attackRandom == 2) {
        pc = "Paper"
    } else {
        pc = "Scissors"
    }

    fight()
};

function fight()
{
    let spanLivePlayer = document.getElementById("livePlayer")
    let spanLiveEnemy = document.getElementById("liveEnemy")
    if(pc == player) {
        createMessage("TIE")
    } else if (player == "Rock" && pc == "Scissors") {
        createMessage("WIN")
        livesEnemy --
        spanLiveEnemy.innerHTML = livesEnemy
    } else if (player == "Paper" && pc == "Rock") {
        createMessage("WIN")
        livesEnemy --
        spanLiveEnemy.innerHTML = livesEnemy
    } else if (player == "Scissors" && pc == "Paper") {
        createMessage("WIN")
        livesEnemy --
        spanLiveEnemy.innerHTML = livesEnemy
    } else {
        createMessage("LOSE")
        livesPlayer --
        spanLivePlayer.innerHTML = livesPlayer
    }

    checkLives()
};

function checkLives()
{
    if (livesEnemy == 0) {
        messageFinal("Felicitaciones!! Ganaste")
    } else if (livesPlayer == 0) {
        messageFinal("Perdiste 😥")
    }
};

function createMessage(result) 
{
    let sectionMessages = document.getElementById('messages')
    
    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'Atacaste con ' + player + ', El enemigo atacó con ' + pc + "- " + result

    sectionMessages.appendChild(paragraph)
};

function messageFinal(resultFinal) 
{

    let sectionMessages = document.getElementById('messages')
    
    let paragraph = document.createElement('p')
    paragraph.innerHTML = resultFinal

    sectionMessages.appendChild(paragraph)

    let buttonRock = document.getElementById("buttonRock")
    buttonRock.disabled = true
    let buttonPaper = document.getElementById("buttonPaper")
    buttonPaper.disabled = true
    let buttonScissors = document.getElementById("buttonScissors")
    buttonScissors.disabled = true

    let buttonRestart = document.getElementById("restart")
    buttonRestart.style.display = "block";
};

function restartGame()
{
    location.reload()
};

function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
};

window.addEventListener("load", startGame);