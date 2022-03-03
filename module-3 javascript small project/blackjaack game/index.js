
let cards=[]
let sum= 0

let hasBlackJack=false;

let isAlive=true;

let message="";

let messageEl= document.getElementById('message-el');
let sumEl= document.getElementById('sum-el');
let cardEl=document.getElementById('card-el');

let playerEl=document.getElementById('player-el');
player={
    name:'chips',
    chips:145

}

playerEl.textContent=player.name+':'+player.chips



function getRandomCard()
{
    let ran= Math.floor(Math.random()*13)+1
     if(ran>10)
       return 10
      else if(ran===1)
        return 1
       else 
         return ran 
        

}

function startGame()
{
    isAlive=true
    firstCard=getRandomCard()
    secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard

    renderGame();
  
}
     
    

function renderGame()
{
    cardEl.textContent="cards: " ;
    sumEl.textContent="sum:"+sum;
   
   for(let i=0;i<cards.length;i++)
   {
      cardEl.textContent+=cards[i]+' ';
   }
    if(sum<=20)
{
   message="Do you want to draw new card?";

}
else if(sum === 21)
{
 message="you'v got Blackjack! 🙂";
    hasBlackJack=true;
}
else 
  {
  message="you're out of game";
   isAlive=false;  
}
 
messageEl.textContent=message;
}


function newGame(){

   if(isAlive===true&& hasBlackJack!==true)
       {
     let Card=getRandomCard();
  
    sum+=Card;
   cards.push(Card);

     renderGame();
   }

    }


  