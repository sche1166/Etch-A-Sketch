let totalGridColumns=16
let totalGridRows=16
let divs =[]
let boxes
let container = document.getElementById('container')
let color =[]

let slider=document.querySelector('input')
let sliderValue =document.querySelector('.value')
sliderValue.textContent= slider.value
window.onload= gamePlay
//need to get clear button to function//


slider.oninput = () => {
  sliderValue.textContent=slider.value}

function build(){
for (let i =0; i< totalGridColumns; i++){
  for(let j= 0; j<totalGridRows; j++){
 boxes= document.createElement('div')
  container.appendChild(boxes) 
  boxes.classList.add('boxStyle')
  divs.push(boxes)
}}}

function gamePlay(){
  build()
  assignColor()
  
}
function assignColor(){
  divs.forEach(div => {
    div.addEventListener('mouseover', () => {
      for(let i= 0; i<256; i++){
        let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        color.push(randomColor)
      div.style.backgroundColor = color[(Math.floor(Math.random()*color.length))]
    };
  });
  let clear = document.getElementById('clear')
  clear.addEventListener('click', () =>{
    div.style.backgroundColor= 'white'
  })
  })
  }
  
