const simple=['red','blue','rgb(165,42,42)','#e76916'];

const button=document.getElementById("btn");
const color=document.querySelector(".color");

button.addEventListener("click",()=>{
    const index=getRandomColor();

   document.body.style.backgroundColor=simple[index];
   color.textContent=simple[index];



})

function getRandomColor(){
    return Math.floor(Math.random()*simple.length);

}

