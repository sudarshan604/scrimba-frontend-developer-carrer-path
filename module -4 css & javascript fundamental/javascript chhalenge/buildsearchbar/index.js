let username= document.getElementById('userInput');


username.addEventListener('keyup',function(event){

    let searchQuery=event.target.value.toLowerCase();
   let allNameDomCollection=document.getElementsByClassName("name");
   for(let i=0;i<allNameDomCollection.length;i++)
   {    
     let currentText=allNameDomCollection[i].textContent.toLowerCase()
    if(currentText.includes(searchQuery))
    {
        allNameDomCollection[i].style.display="block";

    }
    else
      {
        allNameDomCollection[i].style.display="none";

      }

    }


})

 