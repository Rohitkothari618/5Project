const hex=['1','2','3','4','5','6','7','8','9','a','b','c','d','f','e'];
const button=document.getElementById("btn");
const color=document.querySelector(".color");
button.addEventListener("click",()=>{
   
    let index='#';

    
    for(let i=0;i<6;i++){

        index+=hex[getRandomColor()];

      }
   
   document.body.style.backgroundColor=index;
   color.textContent=index;




})

function getRandomColor(){
 


 return( Math.floor(Math.random()*hex.length));

}
