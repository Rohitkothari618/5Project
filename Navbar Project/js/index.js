const button=document.getElementById("btn");

const link=document.querySelector(".container");

button.addEventListener("click",()=>{
    if(link.classList.contains("toggle")){
        link.classList.remove("toggle");
    }
    
    else {
        link.classList.add("toggle");
    }
    

})