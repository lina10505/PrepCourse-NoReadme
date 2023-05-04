const sectionAttack = document.getElementById("seleccionar-ataque")
const buttonPet = document.getElementById("botonMascota");
const buttonRestart = document.getElementById("restart")
const sectionPet = document.getElementById("seleccionar-mascota")
const spanPetPlayer = document.getElementById("mascotaJugador");
const spanPetEnemy = document.getElementById("mascotaEnemigo");
const spanLivePlayer = document.getElementById("livePlayer")
const spanLiveEnemy = document.getElementById("liveEnemy")
const sectionMessages = document.getElementById('results')
const attackPlayers = document.getElementById('attackPlayer')
const attackEnemys = document.getElementById('attackEnemy')
const containerCards = document.getElementById("containerCards")
const containerAttacks = document.getElementById("containerAttacks")
const sectionWatchMaps = document.getElementById("watchMaps")
const maps = document.getElementById("maps")

let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesE = []
let attackPlayer = []
let attackEnemy = []
let optionMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let inputGarro 
let inputLangostelvis 
let inputTucapalma 
let inputPydos 
let inputPelusa 
let inputZarigueya 
let inputOsolote 
let petPlayer
let petPlayerObject
let attacksMokepon
let attacksMokeponEnemy
let buttonWater 
let buttonFire
let buttonEarth 
let buttonAir 
let buttons = []
let indexAttackPlayer
let indexAttackEnemy
let victoryPlayer = 0
let victoryEnemy = 0
let livesPlayer = 3
let livesEnemy = 3
let lienzo = maps.getContext("2d")
let intervalo
let mapsBackground = new Image()
mapsBackground.src = "./mokepones/mokemap.webp"
let heightWant
let widthMaps = window.innerWidth - 20
const maxAncho = 800

if(widthMaps > maxAncho) {
    widthMaps = maxAncho - 20
}

heightWant = widthMaps * 600 / 800
maps.width = widthMaps
maps.height = heightWant

class Mokepon 
{
    constructor(nombre, foto, vida, mapsFoto, id = null) 
    {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 100
        this.alto = 100
        this.x = random(0, maps.width - this.ancho)
        this.y = random(0, maps.height - this.alto)
        this.mapsFoto = new Image()
        this.mapsFoto.src = mapsFoto
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintoMokepon() {
        lienzo.drawImage(
            this.mapsFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
let Hipodoge = new Mokepon('Hipodoge', './mokepones/hipodoge1.png', 5, './mokepones/hipodoge3.png')
let Capipepo = new Mokepon('Capipepo', './mokepones/capipepo1.png', 5, './mokepones/capipepo3.png')
let Ratigueya = new Mokepon('Ratigueya', './mokepones/ratigueya1.png', 5, './mokepones/ratigueya3.png')
let Garro = new Mokepon('Garro', './mokepones/garro1.png', 5, './mokepones/garro3.png')
let Langostelvis = new Mokepon('Langostelvis', './mokepones/langostelvis1.png', 5, './mokepones/langostelvis3.png')
let Tucapalma = new Mokepon('Tucapalma', './mokepones/tucapalma1.png', 5, './mokepones/tucapalma3.png')
let Pydos = new Mokepon('Pydos', './mokepones/pydos1.png', 5, './mokepones/pydos3.png')
let Pelusa = new Mokepon('Pelusa', './mokepones/pelusa1.png', 5, './mokepones/pelusa3.png')
let Zarigueya = new Mokepon('Zarigueya', './mokepones/zarigueya1.png', 5, './mokepones/zarigueya3.png')
let Osolote = new Mokepon('Osolote', './mokepones/osolote1.png', 5, './mokepones/osolote3.png')
const hipodogeAttack = [
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '💨', id: 'buttonAir'}
]
Hipodoge.ataques.push(...hipodogeAttack)
const capipepoAttack = [
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '💨', id: 'buttonAir'}
]
Capipepo.ataques.push(...capipepoAttack)
const ratigueyaAttack = [
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '💨', id: 'buttonAir'}
]
Ratigueya.ataques.push(...ratigueyaAttack)
const garroAttack = [
    { nombre: '💨', id: 'buttonAir'},
    { nombre: '💨', id: 'buttonAir'},
    { nombre: '💨', id: 'buttonAir'},
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '🌱', id: 'buttonEarth'}
]
Garro.ataques.push(...garroAttack)
const langostelvisAttack = [
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '💨', id: 'buttonAir'}
]
Langostelvis.ataques.push(...langostelvisAttack)
const tucapalmaAttack = [
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '💨', id: 'buttonAir'}
]
Tucapalma.ataques.push(...tucapalmaAttack)
const pydosAttack = [
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '💨', id: 'buttonAir'},
    { nombre: '💨', id: 'buttonAir'},
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '🌱', id: 'buttonEarth'}
]
Pydos.ataques.push(...pydosAttack)
const pelusaAttack = [
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '💨', id: 'buttonAir'},
    { nombre: '💧', id: 'buttonWater'}
]
Pelusa.ataques.push(...pelusaAttack)
const zarigueyaAttack = [
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '🔥', id: 'buttonFire'},
    { nombre: '💨', id: 'buttonAir'},
    { nombre: '💨', id: 'buttonAir'},
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '💧', id: 'buttonWater'}
]
Zarigueya.ataques.push(...zarigueyaAttack)
const osoloteAttack = [
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '🌱', id: 'buttonEarth'},
    { nombre: '💨', id: 'buttonAir'},
    { nombre: '💨', id: 'buttonAir'},
    { nombre: '💧', id: 'buttonWater'},
    { nombre: '🔥', id: 'buttonFire'}
]
Osolote.ataques.push(...osoloteAttack)

mokepones.push(Hipodoge, Capipepo, Ratigueya, Garro, Langostelvis, Tucapalma, Pydos, Pelusa, Zarigueya, Osolote)

function startGame()
{
    sectionAttack.style.display = "none";
    sectionWatchMaps.style.display = "none";
    mokepones.forEach((mokepon) => {
        optionMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="mokeponCard" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    containerCards.innerHTML += optionMokepones
    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
    inputGarro = document.getElementById("Garro");
    inputLangostelvis = document.getElementById("Langostelvis");
    inputTucapalma = document.getElementById("Tucapalma");
    inputPydos = document.getElementById("Pydos");
    inputPelusa = document.getElementById("Pelusa");
    inputZarigueya = document.getElementById("Zarigueya");
    inputOsolote = document.getElementById("Osolote");
    })
    buttonPet.addEventListener("click", pickPetP);
    buttonRestart.addEventListener("click", restartGame)
    buttonRestart.style.display = "none";
    startToPlay()
};

function startToPlay() 
{
    fetch(`http://192.168.1.6:8080/unirse`)
        .then(function (res) {
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
};

function pickPetP()
{
    if (inputHipodoge.checked) {
        spanPetPlayer.innerHTML = inputHipodoge.id
        petPlayer = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = inputCapipepo.id
        petPlayer = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanPetPlayer.innerHTML = inputRatigueya.id
        petPlayer = inputRatigueya.id
    } else if (inputGarro.checked) {
        spanPetPlayer.innerHTML = inputGarro.id
        petPlayer = inputGarro.id
    } else if (inputLangostelvis.checked) {
        spanPetPlayer.innerHTML = inputLangostelvis.id
        petPlayer = inputLangostelvis.id
    } else if (inputTucapalma.checked) {
        spanPetPlayer.innerHTML = inputTucapalma.id
        petPlayer = inputTucapalma.id
    } else if (inputPydos.checked) {
        spanPetPlayer.innerHTML = inputPydos.id
        petPlayer = inputPydos.id
    } else if (inputPelusa.checked) {
        spanPetPlayer.innerHTML = inputPelusa.id
        petPlayer = inputPelusa.id
    } else if (inputZarigueya.checked) {
        spanPetPlayer.innerHTML = inputZarigueya.id
        petPlayer = inputZarigueya.id
    } else if (inputOsolote.checked) {
        spanPetPlayer.innerHTML = inputOsolote.id
        petPlayer = inputOsolote.id
    } else {
        alert("Selecciona una mascota")
        return
    }
    sectionPet.style.display = "none";
    pickMokepon(petPlayer)
    extractAttacks(petPlayer)
    sectionWatchMaps.style.display = "flex";
    startMaps()
};

function pickMokepon(petPlayer) 
{
    fetch(`http://192.168.1.6:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: petPlayer
        })
    })
};

function extractAttacks(petPlayer)
{
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (petPlayer === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    showAttacks(ataques)
};

function showAttacks(ataques)
{
    ataques.forEach((attack) => {
        attacksMokepon = `
        <button id=${attack.id} class="buttons bAttacks">${attack.nombre}</button>
        `
        containerAttacks.innerHTML += attacksMokepon
    })

    buttonWater = document.getElementById("buttonWater")
    buttonFire = document.getElementById("buttonFire")
    buttonEarth = document.getElementById("buttonEarth")
    buttonAir = document.getElementById("buttonAir")
    buttons = document.querySelectorAll('.bAttacks')
};

function sequenceAttacks()
{
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                attackPlayer.push("FIRE")
                console.log(attackPlayer)
                button.style.background = '#66347F'
                button.disabled = true
            } else if (e.target.textContent === "💧") {
                attackPlayer.push("WATER")
                console.log(attackPlayer)
                button.style.background = '#66347F'
                button.disabled = true
            } else if (e.target.textContent === "🌱") {
                attackPlayer.push("EARTH")
                console.log(attackPlayer)
                button.style.background = '#66347F'
                button.disabled = true
            } else {
                attackPlayer.push("AIR")
                console.log(attackPlayer)
                button.style.background = '#66347F'
                button.disabled = true
            }
            if (attackPlayer.length === 6) {
                sendAttacks()
            }
        })
    })
    
};

function sendAttacks()
{
    fetch(`http://192.168.1.6:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: attackPlayer
        })
    })

    intervalo = setInterval(obtenerAttacks, 50)
};

function obtenerAttacks()
{
    fetch(`http://192.168.1.6:8080/mokepon/${enemigoId}/ataques`)
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function ({ ataques }) {
                        if (ataques.length === 6) {
                            attackEnemy = ataques
                            fight()
                        }
                    })
            }
        })
};

function pickPetE(enemy)
{
    spanPetEnemy.innerHTML = enemy.nombre
    attacksMokeponEnemy = enemy.ataques
    sequenceAttacks()
};

function randomEnemy() 
{
    console.log('Ataques enemigo', attacksMokeponEnemy);
    let attackRandom = random(0, attacksMokeponEnemy.length -1);
    if (attackRandom == 0 || attackRandom == 1) {
        attackEnemy.push("FIRE") 
    } else if (attackRandom == 3 || attackRandom == 4) {
        attackEnemy.push("WATER") 
    } else if (attackRandom == 5 || attackRandom == 6) {
        attackEnemy.push("EARTH") 
    } else {
        attackEnemy.push("AIR") 
    };
    console.log(attackEnemy)
    startFight()
};

function startFight()
{
    if (attackPlayer.length === 6) {
        fight()
    }
};

function indexBoth(player, enemy)
{
    indexAttackPlayer = attackPlayer[player]
    indexAttackEnemy = attackEnemy[enemy]
}

function fight()
{
    clearInterval(intervalo)
    for (let index = 0; index < attackPlayer.length; index++) {
        if(attackPlayer[index] === attackEnemy[index]) {
            indexBoth(index, index)
            createMessage("TIE")
        } else if (attackPlayer[index] === "FIRE" && attackEnemy[index] === "EARTH") {
            indexBoth(index, index)
            createMessage("WIN")
            victoryPlayer++
            spanLivePlayer.innerHTML = victoryPlayer
        } else if (attackPlayer[index] === "WATER" && attackEnemy[index] === "FIRE") {
            indexBoth(index, index)
            createMessage("WIN")
            victoryPlayer++
            spanLivePlayer.innerHTML = victoryPlayer
        } else if (attackPlayer[index] === "EARTH" && attackEnemy[index] === "WATER") {
            indexBoth(index, index)
            createMessage("WIN")
            victoryPlayer++
            spanLivePlayer.innerHTML = victoryPlayer
        } else if (attackPlayer[index] === "AIR" && attackEnemy[index] === "FIRE") {
            indexBoth(index, index)
            createMessage("WIN")
            victoryPlayer++
            spanLivePlayer.innerHTML = victoryPlayer
        } else if (attackPlayer[index] === "EARTH" && attackEnemy[index] === "AIR") {
            indexBoth(index, index)
            createMessage("WIN")
            victoryPlayer++
            spanLivePlayer.innerHTML = victoryPlayer
        } else if (attackPlayer[index] === "AIR" && attackEnemy[index] === "WATER") {
            indexBoth(index, index)
            createMessage("WIN")
            victoryPlayer++
            spanLivePlayer.innerHTML = victoryPlayer
        } else {
            indexBoth(index, index)
            createMessage("LOSE")
            victoryEnemy++
            spanLiveEnemy.innerHTML = victoryEnemy
        }
    }
    checkLives()
};

function checkLives()
{
    if (victoryPlayer === victoryEnemy) {
        messageFinal("Esto fue un Empate!!!")
    } else if (victoryPlayer > victoryEnemy) {
        messageFinal("Felicitaciones! Ganaste 😊")
    } else {
        messageFinal("Perdiste 😥")
    }
};

function createMessage(result) 
{
    let newPlayerAttack= document.createElement('p')
    let newEnemyAttack= document.createElement('p')
    sectionMessages.innerHTML = result
    newPlayerAttack.innerHTML = indexAttackPlayer
    newEnemyAttack.innerHTML = indexAttackEnemy
    attackPlayers.appendChild(newPlayerAttack)
    attackEnemys.appendChild(newEnemyAttack)
};

function messageFinal(resultFinal) 
{
    sectionMessages.innerHTML = resultFinal
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

function pintCanvas()
{
    petPlayerObject.x = petPlayerObject.x + petPlayerObject.velocidadX
    petPlayerObject.y = petPlayerObject.y + petPlayerObject.velocidadY
    lienzo.clearRect(0, 0, maps.width, maps.height)
    lienzo.drawImage(
        mapsBackground,
        0,
        0,
        maps.width,
        maps.height
    )
    petPlayerObject.pintoMokepon()
    enviarPosicion( petPlayerObject.x, petPlayerObject.y)
    mokeponesE.forEach( function (mokepon) {
        if(mokepon != undefined) {
            mokepon.pintoMokepon()
            checkCollision(mokepon)
        }

    })
};

function enviarPosicion(x, y) 
{
    fetch(`http://192.168.1.6:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res) {
        if (res.ok) {
            res.json()
                .then(function ({ enemigos }) {
                    console.log(enemigos)
                    mokeponesE = enemigos.map(function (enemigo) {
                        let mokeponEnemy = null
                        if (enemigo.mokepon != undefined) {
                            const mokeponN = enemigo.mokepon.nombre || ""
                            switch(mokeponN) 
                            {
                                case "Hipodoge": 
                                    mokeponEnemy = new Mokepon('Hipodoge', './mokepones/hipodoge1.png', 5, './mokepones/hipodoge3.png', enemigo.id)
                                    break
                                case "Capipepo":
                                    mokeponEnemy = new Mokepon('Capipepo', './mokepones/capipepo1.png', 5, './mokepones/capipepo3.png', enemigo.id)
                                    break
                                case "Ratigueya":
                                    mokeponEnemy = new Mokepon('Ratigueya', './mokepones/ratigueya1.png', 5, './mokepones/ratigueya3.png', enemigo.id)
                                    break
                                case "Garro":
                                    mokeponEnemy = new Mokepon('Garro', './mokepones/garro1.png', 5, './mokepones/garro3.png', enemigo.id)
                                    break
                                case "Langostelvis":
                                    mokeponEnemy = new Mokepon('Langostelvis', './mokepones/langostelvis1.png', 5, '.mokepones/langostelvis3.png', enemigo.id)
                                    break
                                case "Tucapalma":
                                    mokeponEnemy = new Mokepon('Tucapalma', './mokepones/tucapalma1.png', 5, './mokepones/tucapalma3.png', enemigo.id)
                                    break
                                case "Pydos":
                                    mokeponEnemy = new Mokepon('Pydos', './mokepones/pydos1.png', 5, './mokepones/pydos3.png', enemigo.id)
                                    break
                                case "Pelusa":
                                    mokeponEnemy = new Mokepon('Pelusa', './mokepones/pelusa1.png', 5, './mokepones/pelusa3.png', enemigo.id)
                                    break
                                case "Zarigueya":
                                    mokeponEnemy = new Mokepon('Zarigueya', './mokepones/zarigueya1.png', 5, './mokepones/zarigueya3.png', enemigo.id)
                                    break
                                case "Osolote":
                                    mokeponEnemy = new Mokepon('Osolote', './mokepones/osolote1.png', 5, './mokepones/osolote3.png', enemigo.id)
                                    break
                                default:
                                    break
                            }
                            mokeponEnemy.x = enemigo.x
                            mokeponEnemy.y = enemigo.y
                        }
                        return mokeponEnemy
                    })
                })
        }
    })
};

function moveDerecha()
{
    petPlayerObject.velocidadX = 5
};

function moveIzquierda()
{
    petPlayerObject.velocidadX = -5
};

function moveArriba()
{
    petPlayerObject.velocidadY = -5
};

function moveAbajo()
{
    petPlayerObject.velocidadY = 5
};

function stopMove()
{
    petPlayerObject.velocidadX = 0
    petPlayerObject.velocidadY = 0
};

function pressKey(event)
{
    switch (event.key)
    {
        case "ArrowUp":
            moveArriba()
            break
        case "ArrowDown":
            moveAbajo()
            break
        case "ArrowRight":
            moveDerecha()
            break
        case "ArrowLeft":
            moveIzquierda()
            break
        default:
            break
    }
};

function startMaps()
{
    petPlayerObject = obectPet(petPlayer)
    intervalo = setInterval(pintCanvas, 50)
    window.addEventListener("keydown", pressKey)
    window.addEventListener("keyup", stopMove)
};

function obectPet()
{
    for (let i = 0; i < mokepones.length; i++) {
        if (petPlayer === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
};

function checkCollision(enemy)
{
    const arribaEnemy = enemy.y +25
    const abajoEnemy = enemy.y + enemy.alto -25
    const derechaEnemy = enemy.x + enemy.ancho -25
    const izquierdaEnemy = enemy.x +25

    const arribaPet = petPlayerObject.y +25
    const abajoPet = petPlayerObject.y + petPlayerObject.alto -25
    const derechaPet = petPlayerObject.x + petPlayerObject.ancho -25
    const izquierdaPet = petPlayerObject.x +25
    if(
        abajoPet < arribaEnemy ||
        arribaPet > abajoEnemy ||
        derechaPet < izquierdaEnemy ||
        izquierdaPet > derechaEnemy
    ) {
        return 
    }
    stopMove()
    clearInterval(intervalo)
    enemigoId = enemy.id
    sectionAttack.style.display = "flex";
    sectionWatchMaps.style.display = "none"
    pickPetE(enemy)
};

window.addEventListener("load", startGame);