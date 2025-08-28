const heartIcons = document.querySelectorAll(".fa-heart");
const heartCounter = document.getElementById("heart-counter");

let counter=0;
function updateHeartCounter(){
    counter+=1;
    heartCounter.innerText=counter;
}
heartIcons.forEach(heartIcon =>{
    heartIcon.addEventListener('click', ()=>{
    updateHeartCounter()
})
})