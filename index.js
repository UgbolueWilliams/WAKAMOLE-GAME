const allBoxes=document.querySelectorAll(".container-items")
const allImages=document.querySelectorAll("img")

 const display=document.querySelector("h1")

 const startButton=document.querySelector("button")

 startButton.addEventListener('click',  startGame)

for(let i=0; i<allBoxes.length; i++){
    allBoxes[i].addEventListener('click',(e)=>{
        if(e.currentTarget.classList.contains('active')){
            score++
            display.innerText=score
        }
        else if (!e.currentTarget.classList.contains('active')){
            startButton.style.visibility="visible"
            display.innerText=`Game over your score is ${score}`
            clearInterval(timer)
        }
    })
}


let score="0"
let timer
function startGame(){
    startButton.style.visibility="hidden"
    
  
     timer=setInterval(()=>{
        /*allImages.forEach((img)=>{img.style.visibility='hidden'
    }) */
        for(let i=0; i<allImages.length;i++){
            allImages[i].style.visibility='hidden'
             allBoxes[i].classList.remove('active')
        }
        const randomValue=Math.floor(Math.random()*allImages.length)
    allImages[randomValue].style.visibility="visible"
    allBoxes[randomValue].classList.add('active')
     
 }, 1000 )
}



 // allBoxes[0].classList.add('banana')
 
 