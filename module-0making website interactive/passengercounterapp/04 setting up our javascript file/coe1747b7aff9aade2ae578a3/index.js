
let countEl=document.getElementById("count-el");

let WelcomeeEl= document.getElementById("welcome-el");
let nameStr='Entry';
let nameStr2= 'People';
let greet= nameStr2+" " +nameStr;

let saveEl=document.getElementById('save-el');

WelcomeeEl.textContent=greet;
let count=0;
function increament()
{
    
    count+=1;
//   countEl.innerText=count;
countEl.textContent=count;

}
function save()
{
    let saveC=count+' - ';
    saveEl.textContent+=saveC;
   count=0;
   countEl.textContent=count;

}


