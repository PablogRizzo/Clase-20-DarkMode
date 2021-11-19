const c = document.getElementById("1");
const cont = document.querySelector(".container");

c.addEventListener("click",(e)=>{
    console.log("hola");
    if(e.target == c){
        cont.classList.toggle('ligth');
    }
});