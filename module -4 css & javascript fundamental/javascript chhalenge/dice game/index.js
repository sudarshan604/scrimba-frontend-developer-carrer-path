
let playerTurn=true
let playerFirstScore=0
let playerSecondScore=0

let player1Dice=document.getElementById('player1Dice')
let player2Dice=document.getElementById('player2Dice')

let player1Scoreboard=document.getElementById('player1scoreboard')
let player2Scoreboard=document.getElementById('player2scoreboard')

let message=document.getElementById('message')

const resetBtm=document.getElementById('resetBtn')
const rollBtm=document.getElementById('rollBtn')


rollBtm.addEventListener('click',function(){
    let ramdomNum=Math.floor(Math.random()*6)+1
  if(playerTurn)
    {
       playerFirstScore+=ramdomNum
       player1Dice.textContent=ramdomNum
       player1Dice.classList.add('shadow')
       player2Dice.classList.remove('shadow')
       console.log("player 1 turn"+ramdomNum)
       message.textContent='player 1 turn'
       player1Scoreboard.textContent=playerFirstScore
    }
   else{
       playerSecondScore+=ramdomNum

       player2Dice.textContent=ramdomNum
       message.textContent='player 2 turn'

       player1Dice.classList.remove('shadow')
       player2Dice.classList.add('shadow')
       console.log("player 2 turn"+ramdomNum)
        player2Scoreboard.textContent=playerSecondScore

}
   playerTurn=!playerTurn //if playerTurn is true then =! it make playerTurn false
  
   if(playerFirstScore>=20||playerSecondScore>=20)
   {
    hideShow('none','block')    
    
        
      if(playerFirstScore> playerSecondScore)
         {
              message.textContent='player 1 is winner 😻'  
         }
      else
      message.textContent='player 2 is winner  🙋 ' 


   }


})

resetBtm.addEventListener('click',function(){
   reset()
 
})

function hideShow(str,str1)
{
    rollBtm.style.display=str
    resetBtm.style.display=str1      
}


function reset()
{
    playerTurn=true
    playerFirstScore=0
    playerSecondScore=0
    player1Scoreboard.textContent=0
   player2Scoreboard.textContent=0
   player1Dice.textContent='-'
   player2Dice.textContent='-'     
 message.textContent='player 1 turn'
 resetBtm.classList.remove('active')
 rollBtm.classList.add('active')
 
 hideShow('block','none')    


}




