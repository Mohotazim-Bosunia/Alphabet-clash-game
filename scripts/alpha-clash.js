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
     
      
        //update score

        /**      //1.get the current score
        const currentScoreElement=document.getElementById('current-score')
        const currentScoreText=currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);
        console.log(currentScore)

        //2.increase the score by 1
        const newScore=currentScore + 1
        
        //3.show the update score
        currentScoreElement.innerText=newScore; */
        //console.log('you get a point')
        
        const currentScore=getTextElementValueById('current-score')
        const updatedScore=currentScore+1;
        setTextElementValueById('current-score',updatedScore)
         
        
        //start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else{
        console.log('you missed.you lost a life') 
      
      /**   //step-1: get the current Life number
          const currentLifeElement=document.getElementById('current-life')
          const currentLifeText=currentLifeElement.innerText;
          const currentLife=parseInt(currentLifeText);

        //step-2:reduce the life count
          const newLife=currentLife - 1;
        //step-3:Disply the updated life count
        currentLifeElement.innerText=newLife; */

        const currentScore=getTextElementValueById('current-life')
        const updatedScore=currentScore-1;
        setTextElementValueById('current-life',updatedScore)

        if(updatedScore==0){
            gameOver()
        }
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
    //hide everything show only the playground
    hideElementById("home-screen")
    hideElementById("final-score")
    showElementById('play-ground')
    
    //reset score and life
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)
}

function gameOver(){
    hideElementById("play-ground")
    showElementById('final-score')

    //show score
    const lastScore=getTextElementValueById('current-score');
    setTextElementValueById('last-score',lastScore)
    
}
