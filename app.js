let serviceworker = './sw.js'

const checkForServiceworker = () =>{
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(serviceworker)
        .then(res =>console.log('service worker reg'))
        .catch(err => console.log(err))
    }
}
checkForServiceworker()


class Game{
    constructor(current,firstplayer,secondplayer){
        this.cross = 'X';
        this.zero = 'O';
        this.current = current;
        this.firstplayerScore = 0;
        this.secondplayerScore = 0;
        this.firstplayer = firstplayer;
        this.secondplayer = secondplayer;
        this.result = false;
        this.winningEntry = '';
        this.testwin = [];
    }
}

 

const game = new Game()

class UI{

    uiSelector(){
        return{
            appContent:document.querySelectorAll('.gameEntries'),
            starGame:document.querySelector('.getenter'),
            appbox:document.querySelector('.app-content'),
            myInput:document.querySelector('.myInput'),
            firstpaer:document.querySelector('.firstpaer').value,
            firstplayerScore:document.querySelector('.firstplayerScore'),
            secondplayerScore:document.querySelector('.secondplayerScore'),
            firstplayer:document.querySelector('.firstPlayer'),
            secondplayer:document.querySelector('.secondPlayer'),
            resetGame:document.querySelector('.resetGame'),
            scoreBoard:document.querySelector('.scoreBoard'),
            appBody:document.querySelector('.appBody'),
            instruction:document.querySelector('.instruction'),
            playagain:document.querySelector('.playagain'),
            congrat:document.querySelector('.congrat'),
            song:document.querySelector('.song'),
            winner:document.querySelector('.winner')
        }
    } 

     selectCharacterforTextContent(entire){
         
        if (game.current === game.zero) {
            entire.textContent =game.current
            game.current = entire.textContent
            this.getEntry()
            this.determineWinning()
            game.current = game.cross
            return game.current
        }else
        if (game.current === game.cross) {
            entire.textContent =game.current
            game.current = entire.textContent
            this.getEntry()
            this.determineWinning()
            game.current = game.zero
            return game.current
        }
        
    }

    getEntry(){
        
    let lala = this.uiSelector().appContent
    let collectionentry = []
        lala.forEach(item =>{
             collectionentry.push(item.textContent)
        })
        const firstwin = [collectionentry[0],collectionentry[1],collectionentry[2]]
        const secondwin = [collectionentry[3],collectionentry[4],collectionentry[5]]
        const thridwin = [collectionentry[6],collectionentry[7],collectionentry[8]]
        const fourwin = [collectionentry[0],collectionentry[3],collectionentry[6]]
        const fifywin = [collectionentry[1],collectionentry[4],collectionentry[7]]
        const sixywin = [collectionentry[2],collectionentry[5],collectionentry[8]]
        const sevenwin = [collectionentry[2],collectionentry[4],collectionentry[6]]
        const eigthywin = [collectionentry[0],collectionentry[4],collectionentry[8]]
        const mee = [firstwin, secondwin, thridwin, fourwin, fifywin, sixywin, sevenwin, eigthywin]
        return mee
    }

    playAnotherAgain(){
        this.uiSelector().congrat.classList.add('hidden')
        this.uiSelector().appbox.style.borderColor= '#00000031'
        this.uiSelector().appContent.forEach(entry =>{
            entry.textContent = ''
            
            entry.style.pointerEvents = 'auto'
        })
    }


     determineWinning(lala = this.getEntry()){
        let myCur = game.current
        let myresult = false

        for (const char of lala) {
           if (char.every(e => e === 'X')) {
               console.log(char,myCur);
               myresult = true
           } 
           if (char.every(e => e === 'O')) {
            myresult = true
           }

        }

        game.winningEntry = myCur
        game.result = myresult
        this.winnerAnalysis()
    }


    winnerAnalysis(){       
        if (game.result === true) {
            if (game.winningEntry === game.firstplayer) {
                game.firstplayerScore++
            }else {
                game.secondplayerScore++
            }
            this.uiSelector().appbox.style.borderColor= 'green'
            this.uiSelector().firstplayerScore.textContent = game.firstplayerScore
            this.uiSelector().winner.textContent = game.winningEntry
            this.uiSelector().secondplayerScore.textContent = game.secondplayerScore
            this.uiSelector().congrat.classList.remove('hidden')
            this.uiSelector().myInput.style.display = 'none'
            this.uiSelector().appContent.forEach(all =>
                all.style.pointerEvents = 'none')
        }
    }


    readyGame(){
        game.current = this.uiSelector().firstpaer
        game.firstplayer =game.current
        this.uiSelector().appbox.classList.replace('gap-0','gap-1')
        if (game.firstplayer ==='O') {
            game.secondplayer = 'X'
        } else if (game.firstplayer ==="X"){
            game.secondplayer = "O"
        }   
        this.uiSelector().scoreBoard.style.display = 'block'
        this.uiSelector().starGame.style.display = 'none'
        this.uiSelector().myInput.style.display = 'none'
        this.uiSelector().instruction.style.display = 'none'
        this.uiSelector().resetGame.style.display = 'block'
        ui.uiSelector().firstplayer.textContent = `{${game.firstplayer}}`
        ui.uiSelector().secondplayer.textContent = `{${game.secondplayer}}`
        this.uiSelector().appBody.classList.add('initApp')
        this.uiSelector().appbox.style.display = 'grid'
        this.uiSelector().song.play() 
    } 

     init(){
        this.uiSelector().firstplayerScore.textContent = game.firstplayerScore
        this.uiSelector().secondplayerScore.textContent = game.secondplayerScore
        this.uiSelector().scoreBoard.style.display = 'none'
        this.uiSelector().appBody.classList.remove('initApp')
        this.uiSelector().appbox.style.display = 'none'
        this.uiSelector().appbox.classList.replace('gap-1','gap-0')
        
    }
}

const ui = new UI()
ui.init()

ui.uiSelector().appContent.forEach(entre => {
    entre.addEventListener('click', e =>{
        ui.selectCharacterforTextContent(e.target)
        entre.style.pointerEvents = 'none'
        
    })
   
});
ui.uiSelector().starGame.addEventListener('click', e =>{
    ui.readyGame()
    });
ui.uiSelector().playagain.addEventListener('click', e =>{
    ui.playAnotherAgain()
    });
ui.uiSelector().resetGame.addEventListener('click', e =>{
    ui.playAnotherAgain()
    });


