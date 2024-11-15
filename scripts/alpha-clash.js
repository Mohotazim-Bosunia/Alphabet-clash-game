/*
function play(){
    const homeSection=document.getElementById('home-screen')
    console.log(homeSection.classList.add('hidden'));

    const playgroundSection=document.getElementById('play-ground');
    console.log(playgroundSection.classList.remove('hidden'))
}*/ 

//capture keybord key press
document.addEventListener('keyup',function handleKeyButtonPress(event){
    const playerPressed=event.key;
    //console.log('Player pressed',event.key)

    const currentAlphabetElement=document.getElementById("currentAlphabet");
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase()
    console.log(playerPressed,expectedAlphabet)

    //check matched or not
    if(playerPressed==expectedAlphabet){
        console.log('you get a point')
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else{
        console.log('you missed.you lost a life') 
    }
})
    


function continueGame(){
    //step-1:generate a random alphabet
    const alphabet=getARandomAlphabet()
    console.log('Youe random Alphabet',alphabet)

    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement=document.getElementById("currentAlphabet");
    currentAlphabetElement.innerText=alphabet

    //set background color
    setBackgroundColorById(alphabet)
}

function play(){
    hideElementById("home-screen")
    showElementById('play-ground')
    continueGame()
}
