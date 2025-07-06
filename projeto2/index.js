const questions = [
    {
        text: 'Qual é o país mais populoso do mundo?',
        a: 'Estados Unidos',
        b: 'Índia',
        c: 'China',
        correct: 'c'
    },
    {
        text: 'Quem foi o primeiro homem a pisar na Lua?',
        a: 'Neil Armstrong',
        b: 'Buzz Aldrin',
        c: 'Yuri Gagarin',
        correct: 'a'
    },
    {
        text: 'Qual é a capital da Argentina?',
        a: 'Montevidéu',
        b: 'Buenos Aires',
        c: 'Santiago',
        correct: 'b'
    },
    {
        text: 'Qual é o maior oceano do mundo?',
        a: 'Pacífico',
        b: 'Índico',
        c: 'Atlântico',
        correct: 'a'
    },
    {
        text: 'Quem pintou "Guernica"?',
        a: 'Vincent van Gogh',
        b: 'Salvador Dalí',
        c: 'Pablo Picasso',
        correct: 'c'
    },
    {
        text: 'Quantos segundos tem uma hora?',
        a: '3.600',
        b: '3.000',
        c: '3.600',
        correct: 'a'
    },
    {
        text: 'Qual é o principal gás responsável pelo efeito estufa?',
        a: 'Dióxido de carbono (CO2)',
        b: 'Oxigênio',
        c: 'Hélio',
        correct: 'a'
    },
    {
        text: 'Em que continente fica o deserto do Saara?',
        a: 'América',
        b: 'África',
        c: 'Ásia',
        correct: 'b'
    },
    {
        text: 'Qual é o maior mamífero terrestre?',
        a: 'Elefante africano',
        b: 'Rinoceronte',
        c: 'Hipopótamo',
        correct: 'a'
    },
    {
        text: 'Quantos lados tem um octógono?',
        a: '10',
        b: '8',
        c: '6',
        correct: 'b'
    },
    {
        text: 'Qual é o rio mais longo do mundo?',
        a: 'Amazonas',
        b: 'Yangtzé',
        c: 'Nilo',
        correct: 'a'
    },
    {
        text: 'Quem escreveu "A Origem das Espécies"?',
        a: 'Albert Einstein',
        b: 'Charles Darwin',
        c: 'Isaac Newton',
        correct: 'b'
    },
    {
        text: 'Qual é o idioma oficial da Austrália?',
        a: 'Inglês',
        b: 'Francês',
        c: 'Alemão',
        correct: 'a'
    },
    {
        text: 'Em que país foram realizados os Jogos Olímpicos de 2021?',
        a: 'Japão',
        b: 'China',
        c: 'Coreia do Sul',
        correct: 'a'
    },
    {
        text: 'Qual é a moeda da Inglaterra?',
        a: 'Dólar',
        b: 'Libra esterlina',
        c: 'Euro',
        correct: 'b'
    },
    {
        text: 'Qual planeta é conhecido como "planeta vermelho"?',
        a: 'Marte',
        b: 'Vênus',
        c: 'Mercúrio',
        correct: 'a'
    },
    {
        text: 'Qual é a montanha mais alta do mundo?',
        a: 'Aconcágua',
        b: 'K2',
        c: 'Everest',
        correct: 'c'
    },
    {
        text: 'Quem foi o criador da teoria da relatividade?',
        a: 'Albert Einstein',
        b: 'Stephen Hawking',
        c: 'Galileu Galilei',
        correct: 'a'
    },
    {
        text: 'Qual é o símbolo químico do ferro?',
        a: 'Fe',
        b: 'Ir',
        c: 'Fe',
        correct: 'a'
    },
    {
        text: 'Quantos continentes existem?',
        a: '6',
        b: '5',
        c: '7',
        correct: 'c'
    }
];


// Variáveis Gerais
const playerPoints = document.getElementById('points')
const gameBoard = document.getElementById('gameBoard')
const pointsBoard = document.getElementById('pointsBoard')
const questionTime = document.getElementById('questionTime')
let points = 0
let timer = 7
let answered = false;


//Embaralhamento do array :
questions.sort(()=> Math.random() - 0.5);

// Arrays das oito perguntas 
let sortQuestions = []

let itemsToPlay = questions.slice(0,9)

sortQuestions.push(...itemsToPlay)

console.log(sortQuestions)

// Funções repetitivas 

function clearBoard(){
    gameBoard.innerHTML = ''
}

function createP(text){
    const p = document.createElement('p')
    p.textContent = text

    gameBoard.appendChild(p)
}

function createBtn(text,letter, event){
    const btn = document.createElement('button')
    btn.textContent = text
    btn.dataset.letter = letter
    btn.addEventListener('click', event)

    gameBoard.appendChild(btn)
}

// Pegar a pergunta 
let oneQuestion

function getQuestion(){
    oneQuestion = sortQuestions.shift() // remove o primeiro item do array
    
}

// Timer
let interval
function setTime(question){
    clearInterval(interval)
    timer = 7
    interval = setInterval(function(){
        if(timer <= 7 && timer > 0){
            timer --
            questionTime.textContent = 'Tempo: ' + timer
            
        } else {
            clearInterval(interval)
            if(!answered){
                question()
            }
            
        }
    }, 1000)
}

//Lidar com escolha
function handlerChoice(ev,question){
    if(answered) return
    answered = true

    if(ev.currentTarget.dataset.letter === oneQuestion.correct){
        ev.currentTarget.classList.add('correct')
        points++
        playerPoints.textContent = 'Pontos: ' + points
    } else {
        ev.currentTarget.classList.add('wrong')
    }
    setTimeout(() => {
        answered = false;
        question();
    }, 1000);
    
}



// Perguntas
const startBtn = document.getElementById('start')
startBtn.addEventListener('click', question_1)

function question_1(){
    clearBoard()
    setTime(question_2)
    getQuestion()

    createP(oneQuestion.text)
    createBtn(oneQuestion.a, 'a' , function(ev){
        handlerChoice(ev,question_2)
    })
    createBtn(oneQuestion.b, 'b' , function(ev){
        handlerChoice(ev,question_2)
    })
    createBtn(oneQuestion.c, 'c' , function(ev){
        handlerChoice(ev,question_2)
    })
}

function question_2(){
    clearBoard()
    setTime(question_3)
    getQuestion()

    createP(oneQuestion.text)
    createBtn(oneQuestion.a, 'a' , function(ev){
        handlerChoice(ev,question_3)
    })
    createBtn(oneQuestion.b, 'b' , function(ev){
        handlerChoice(ev,question_3)
    })
    createBtn(oneQuestion.c, 'c' , function(ev){
        handlerChoice(ev,question_3)
    })
}

function question_3(){
    clearBoard()
    setTime(question_4)
    getQuestion()

    createP(oneQuestion.text)
    createBtn(oneQuestion.a, 'a' , function(ev){
        handlerChoice(ev,question_4)
    })
    createBtn(oneQuestion.b, 'b' , function(ev){
        handlerChoice(ev,question_4)
    })
    createBtn(oneQuestion.c, 'c' , function(ev){
        handlerChoice(ev,question_4)
    })
}

function question_4(){
    clearBoard()
    setTime(question_5)
    getQuestion()

    createP(oneQuestion.text)
    createBtn(oneQuestion.a, 'a' , function(ev){
        handlerChoice(ev,question_5)
    })
    createBtn(oneQuestion.b, 'b' , function(ev){
        handlerChoice(ev,question_5)
    })
    createBtn(oneQuestion.c, 'c' , function(ev){
        handlerChoice(ev,question_5)
    })
}

function question_5(){
    clearBoard()
    setTime(question_6)
    getQuestion()

    createP(oneQuestion.text)
    createBtn(oneQuestion.a, 'a' , function(ev){
        handlerChoice(ev,question_6)
    })
    createBtn(oneQuestion.b, 'b' , function(ev){
        handlerChoice(ev,question_6)
    })
    createBtn(oneQuestion.c, 'c' , function(ev){
        handlerChoice(ev,question_6)
    })
}

function question_6(){
    clearBoard()
    setTime(question_7)
    getQuestion()

    createP(oneQuestion.text)
    createBtn(oneQuestion.a, 'a' , function(ev){
        handlerChoice(ev,question_7)
    })
    createBtn(oneQuestion.b, 'b' , function(ev){
        handlerChoice(ev,question_7)
    })
    createBtn(oneQuestion.c, 'c' , function(ev){
        handlerChoice(ev,question_7)
    })
}

function question_7(){
    clearBoard()
    setTime(question_8)
    getQuestion()

    createP(oneQuestion.text)
    createBtn(oneQuestion.a, 'a' , function(ev){
        handlerChoice(ev,question_8)
    })
    createBtn(oneQuestion.b, 'b' , function(ev){
        handlerChoice(ev,question_8)
    })
    createBtn(oneQuestion.c, 'c' , function(ev){
        handlerChoice(ev,question_8)
    })
}

function question_8(){
    clearBoard()
    setTime(end)
    getQuestion()

    createP(oneQuestion.text)
    createBtn(oneQuestion.a, 'a' , function(ev){
        handlerChoice(ev,end)
    })
    createBtn(oneQuestion.b, 'b' , function(ev){
        handlerChoice(ev,end)
    })
    createBtn(oneQuestion.c, 'c' , function(ev){
        handlerChoice(ev,end)
    })
}

const endingWinner = [
    'Você é um gênio!',
    'Você foi considerado mais esperto que Einstein!',
    'Você é superdotado!',
    'Você é um baita nerd — com orgulho!',
    'Você provavelmente será bem-sucedido em qualquer coisa (menos esporte talvez 🤓)',
    'Se fosse um teste do Enem, você tirava mil!',
    'Nem o Google responderia tão rápido!',
    'Você acertou tudo… tá colando?',
    'Parabéns, você desbloqueou o modo mestre!',
    'Você é o orgulho da sua professora do fundamental!',
    'Até o ChatGPT ficou impressionado!',
    'Se esse jogo fosse valendo prêmio, você já tava milionário!',
    'Sua mente brilha mais que diamante lapidado!',
    'Você zerou o game — literalmente!',
    'Dá aula fácil! Quer meu emprego?'
];

const endingMid = [
    'Foi bem… mas dava pra melhorar, hein!',
    'Você acertou algumas, errou outras… padrão brasileiro.',
    'Nada mal! Mas ainda não dá pra se gabar no grupo da família.',
    'Você foi tipo o Brasil na Copa: chegou longe, mas não levou o título.',
    'Não foi vergonha… mas também não foi show.',
    'Você tá no meio do caminho entre Einstein e o Zé da esquina.',
    'Dá pra dizer que você tentou… e isso já é bonito.'
];

const endingLow = [
    'Rapaz… não deu muito certo, né?',
    'Você tentou, e isso já é mais do que muita gente faz!',
    'O importante é participar (e estudar depois).',
    'Errou mais do que acertou… mas pelo menos não foi zero!',
    'Foi quase um desastre completo, mas teve um lampejo de esperança!',
    'Você passou raspando… mas no asfalto.',
    'Essa foi só uma prévia do que *não* fazer no Enem.'
];

const endingFail = [
    'Você conseguiu errar tudo… isso também é um talento!',
    'Parabéns! Você bateu o recorde de erros consecutivos!',
    'Zero acertos. Você é o verdadeiro "mito do chute".',
    'Nem se tivesse chutado aleatoriamente teria sido pior.',
    'Você está no time dos que acham que a Terra é plana.',
    'Erro 404: conhecimento não encontrado.',
    'Isso foi um desastre tão grande que entrou pros anais da história!',
    'Já pensou em tentar sorte em outra área? Tipo jardinagem?'
];

function end(){
    clearBoard()
    let endingPhrase = document.createElement('h2')
    let sortPhrase
    if(points === 8){
        sortPhrase = endingWinner.sort(()=>Math.random() - 0.5).shift()
    } else if (points >= 5){
        sortPhrase = endingMid.sort(() => Math.random() - 0.5).shift()
    } else if(points >=1){
        sortPhrase = endingLow.sort(() => Math.random() - 0.5).shift()
    } else {
        sortPhrase = endingFail.sort(() => Math.random() - 0.5).shift()
    }

    endingPhrase.textContent = sortPhrase
    gameBoard.appendChild(endingPhrase)
    setTimeout(()=>location.reload(), 6000)
}

