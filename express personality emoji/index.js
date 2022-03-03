

const myEmoji=['⛄','🥣','🙂']

let empojiContainer=document.getElementById('emojicontainer')
let pushBtn= document.getElementById('push-btn')
let unshiftBtn=document.getElementById('unshift-btn')
let emojiInp=document.getElementById('emoji-input')
let popBtn=document.getElementById('pop-btn')
let shiftBtn=document.getElementById('shift-btn')

render()
function render(){
for(let i=0;i<myEmoji.length;i++)
  {
     let em=document.createElement('span')
     em.textContent+=myEmoji[i]
     empojiContainer.append(em)
  }
}

pushBtn.addEventListener('click',function(){
   if(emojiInp.value){
    myEmoji.push(emojiInp.value)
    emojiInp.value=''   
    empojiContainer.innerHTML=' '
    render()
}
})

 unshiftBtn.addEventListener('click',function(){
    if(emojiInp.value)
    {
         myEmoji.unshift(emojiInp.value)
         emojiInp.value=''
         empojiContainer.innerHTML=''
        render()
        }


 })
 shiftBtn.addEventListener('click',function(){
       myEmoji.shift()
         empojiContainer.innerHTML=''
        render()
       


 })

 popBtn.addEventListener('click',function(){
    myEmoji.pop()
      empojiContainer.innerHTML=''
     render()
    


})










