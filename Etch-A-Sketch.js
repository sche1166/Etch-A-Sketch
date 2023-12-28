let totalBoxes=256
let divs =[]
let container = document.getElementById('container')
let color =[]
window.onload= gamePlay


function build(){
for (let i =0; i< totalBoxes; i++){
 let boxes= document.createElement('div')
  container.appendChild(boxes) 
  boxes.classList.add('boxStyle')
  divs.push(boxes)
}}
//i have an array in which I push my boxes. OBJECTIVE- be able 
//to click on each box and have a random RGB color assigned to it

function gamePlay(){
  build()
  assignColor()
  clear()
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
  
  })
  clear()
  }
function clear(){
  div.rem

}