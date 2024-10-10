// add a element
function hideElements(elementId){

    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}


//remove 
function addElements(elementId){

    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function addBg(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
function removeBg(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

// get a random alphabet 

function getRandomAlphabet(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')

    const index = Math.round((Math.random(alphabets)*25))
 

    const alphabet = alphabets[index];
    
    return alphabet;

}