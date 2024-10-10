function handleKeyboardButtonPress(event){
    const playerPressed = event.key
   
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    
    // checked
    if(playerPressed===expectedAlphabet){
        // get current score
        const currentScoreElement = document.getElementById('current-score')
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
       

        // increase score
        const newScore = currentScore+1

        // set new score
         currentScoreElement.innerText = newScore

        //  start new round
        continueGame();
        removeBg(expectedAlphabet)
    }

    else{
        // get the current life number
        const currentLifeElement = document.getElementById('current-life')
        const currentLifeText = currentLifeElement.innerText
        const currentLife = parseInt(currentLifeText);

        // reduce the life count
        const newLife = currentLife -1

        // display the updated life count
        currentLifeElement.innerText = newLife;

        // when game will end
        if(newLife ===0 || newLife <=0){
            addElements('score')
            hideElements('play-ground')

            // life will be restart
            const newLife= 5
            currentLifeElement.innerText = newLife;
            removeBg(expectedAlphabet)

            // score will be restart
            
            const currentScoreElement = document.getElementById('current-score')
            const newScore = 0
            currentScoreElement.innerText = newScore;

        }
       
    }
}

document.addEventListener('keyup',handleKeyboardButtonPress)


function continueGame(){
    const alphabet = getRandomAlphabet()
    console.log(alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet

    // get bg color
    addBg(alphabet)
}

function showScore(){
    const showScore = document.getElementById('show-score')
    console.log(showScore)
}

function play(){
    hideElements('home-screen')
    hideElements('score')
    addElements('play-ground')
    continueGame()
    
}
