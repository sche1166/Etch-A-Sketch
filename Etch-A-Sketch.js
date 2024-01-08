//ititial global variable//
let totalGridColumns=16
let totalGridRows=16
let divs =[]
let isDrawing= false;
let container = document.getElementById('container')
let progressive= document.getElementById('progressive')
window.onload= build

//slider control and functions that control grid/ bottom two lines are 
//for clearing and rebuilding the grid//
let slider=document.querySelector('input')
let sliderValue =document.querySelector('.value')
sliderValue.textContent= `${slider.value} x ${slider.value}`
slider.oninput = () => {
 sliderValue.textContent=`${slider.value} x ${slider.value}`}
 slider.addEventListener('input', changeGrid)
 clear.addEventListener('click', clearGrid)
 let clear = document.getElementById('clear')

 //function to build out initial grid//


function build(){
  for (let i =0; i< totalGridColumns*totalGridRows; i++){
   boxes= document.createElement('div')
    container.appendChild(boxes) 
    boxes.classList.add('boxStyle')
    boxes.style.flexBasis= `calc(100% / ${totalGridColumns})`
    divs.push(boxes)
  }
}


//clears and rebuilds the grid on click//
function clearGrid(){
  container.innerHTML=''
  for (let i =0; i< totalGridColumns*totalGridRows; i++){
    boxes= document.createElement('div')
     container.appendChild(boxes) 
     boxes.classList.add('boxStyle')
     boxes.style.flexBasis= `calc(100% / ${totalGridColumns})`
     divs.push(boxes)
   }
}
 //connected to my slider that changes number of squares //
 function changeGrid() {
  let grid = slider.value;
  let newGrid = parseInt(grid);
  container.innerHTML = "";
  divs= []
  for (let i = 0; i < newGrid; i++) {
    for (let a = 0; a < newGrid; a++) {
      newBoxes = document.createElement("div");
      container.appendChild(newBoxes);
      newBoxes.classList.add("boxStyle");
      newBoxes.style.flexBasis = `calc(100% / ${newGrid})`;
      divs.push(newBoxes);
    }
  }
}
//game play mode that allows you to draw in random RGB colors
function modernGamePlay() {
  divs.forEach((div) => {
    div.addEventListener('mousedown', () => {
      isDrawing = true;
    });
    div.addEventListener('mouseup', () => {
      isDrawing = false;
    });
    div.addEventListener('mouseover', () => {
      if (isDrawing) {
        let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        div.style.backgroundColor = randomColor;
      }
    });
  });
}

//game play mode that is in all black
  function classicGamePlay(){;
    divs.forEach((div) => {
    div.addEventListener('mousedown', () => {
      isDrawing = true;
    });
    div.addEventListener('mouseup', () => {
      isDrawing = false;
    });
    div.addEventListener('mouseover', () => { 
        if(isDrawing){
        div.style.backgroundColor = 'black'
      }})
    })
    }

   //is connected to my custom game play function that allows you to choose your own 
   //color. this shows the use the color before drawing
    function colorDisplay(){
      let redInput = document.getElementById('red');
      let greenInput = document.getElementById('green');
      let blueInput = document.getElementById('blue');
       let colorBox= document.getElementById('colorBox')
     
       colorBox.style.backgroundColor= `rgb(${redInput.value},${blueInput.value},${greenInput.value})` 
     }
   
//see above comment
function customGamePlay(){
 let rgb= document.querySelector('.RGB')
 rgb.classList.add('RGBactive')
 let redInput = document.getElementById('red');
 let greenInput = document.getElementById('green');
 let blueInput = document.getElementById('blue');
 divs.forEach((div) => {
  div.addEventListener('mousedown', () => {
    isDrawing = true;
  });
  div.addEventListener('mouseup', () => {
    isDrawing = false;
  });
  div.addEventListener('mouseover', () => { 
      if(isDrawing){
        let red = redInput.value;
        let green = greenInput.value;
        let blue = blueInput.value;


        let color = `rgb(${red},${blue},${green}) `
        div.style.backgroundColor= color
    }})
})
redInput.addEventListener('input', colorDisplay)
blueInput.addEventListener('input', colorDisplay)
greenInput.addEventListener('input', colorDisplay)
}


