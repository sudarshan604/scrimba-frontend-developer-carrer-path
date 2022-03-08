let overLay=document.getElementById('overlay');
let modalOpen=document.getElementById('close-modal');
let modalClose=document.getElementById('open-modal');

modalClose.addEventListener("click", function(){
      overLay.style.display ="none"  
});

modalOpen.addEventListener("click",function(){
    overLay.style.display ="block"  
   
})

