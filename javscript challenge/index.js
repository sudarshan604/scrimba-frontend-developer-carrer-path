
const player='per'
const oppont='nick'
const game='amaging game'

let points=100
let haswon=false


if(haswon){
  console.log(`${player} got points ${points} and won the ${game}`)
}
else
    console.log(` ${oppont} won the ${game}`)



let myCourse=['css','django']

    function array(course)
    {
    for(let i=0;i<course.length;i++)
       {
           console.log(course[i])
       }

    }

  array(myCourse)






/*********************************************/
//   localStorage.setItem('name','sudarshan kshetri')

//   let n=localStorage.getItem('name')
// console.log(n)
// localStorage.clear()


/***afetch bottom from DOM ****/ 
//  let data=[
//      {
//          player:'jane',
//          score:100
//      },
//      {
//          player:'rahul',
//          score:4
//      }
//  ]


//   let btn= document.getElementById('btn')

//   btn.addEventListener('click',function(){
     
//   for(let i=0;i<data.length;i++){ 
//     if(data[0].player==='jane'){
//              alert(data[0].player)
//     }
// }

// })

/***********************************/

function generatorSentence(des,arr)
{
   let  baseString= ` the ${arr.length} ${des} are `
   let lastIndex=arr.length-1 

    for(let i=0;i<arr.length;i++)
 {
       if(i==arr.lastIndex)
       {
          baseString+=arr[i]
       }
      else
         baseString+=arr[i]+','
 
    }
  return baseString


}


let a=['red','yellow']

let des='best color are '

console.log(generatorSentence(des,a))

/********************************************************/

let imgC=[
   'butterfly.jpeg',
   'flower.jpeg',
   'nature.jpg',
  
  ]
let image=''
let imageF=document.getElementById('img-id')
for(let i=0;i<imgC.length;i++){
image+=` <img src="${imgC[i]}"> ` 
}
imageF.innerHTML=image




































 



