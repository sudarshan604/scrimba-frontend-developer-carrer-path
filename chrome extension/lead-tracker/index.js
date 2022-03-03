

const inputBtn=document.getElementById('input-btn')
const inputVal=document.getElementById('input-el')
const deleteBtn=document.getElementById('delete-btn')
const tavBtn= document.getElementById('save-tab')
const ulEl=document.getElementById('ul-el')

let myLeads=[]




const leadFromLocalStorage=JSON.parse(localStorage.getItem('myLeads'))

// let trueOrFalse=Boolean(leadFromLocalStorage)
  
if(leadFromLocalStorage)
  {
    myLeads=leadFromLocalStorage;
     render(myLeads)
  }

function render(lead)
{
      let listItem=''
      for(let i=0;i<lead.length;i++) 
      {
      //   listItem+="<li><a href='https://www.google.com'  target='_blank'>"+ myLeads[i]+"</a></li>"  
      // with template string
         listItem+=`
                  <li>
                     <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}
                     </a>
                     </li>   
               `
   
         
      
      }
      ulEl.innerHTML=listItem;
   
}
 


tavBtn.addEventListener('click',function(){

 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

  myLeads.push(tabs[0].url)
  localStorage.setItem('myLeads',JSON.stringify(myLeads))
  render(myLeads) 

});
 



})
deleteBtn.addEventListener('dblclick',function(){
    localStorage.clear()
     myLeads=[]   
  render(myLeads)

})


  inputBtn.addEventListener("click",function(){
   myLeads.push(inputVal.value)
   localStorage.setItem('myLeads',JSON.stringify(myLeads))
    
    inputVal.value=" "
       render(myLeads)
})




