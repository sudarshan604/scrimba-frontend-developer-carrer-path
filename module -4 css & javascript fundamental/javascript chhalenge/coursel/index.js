const slide =document.getElementsByClassName('carousel-item')
const totalSlide=slide.length;
let position=0

let buttonPrev=document.getElementById('carousel-button-prev')
let buttonNext=document.getElementById('carousel-button-next')

buttonPrev.addEventListener('click',moveToPreviousSlide);

buttonNext.addEventListener('click',moveToNextSlide);

function hideAllSide()
{
     for(let s of slide)
  {
  
     s.classList.remove('carousel-item-visible')
     s.classList.add('carousel-item-hidden')
 
  }

}
function moveToNextSlide()
{
     hideAllSide()
     if(position===totalSlide-1)
     {
       position=0
    }
   else
     position++
     slide[position].classList.add('carousel-item-visible')

}

function moveToPreviousSlide()
{
   hideAllSide()
  
   if(position===0){
        position=totalSlide-1
   }
  else
     position--
    slide[position].classList.add('carousel-item-visible')
  
}