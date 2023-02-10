const randomColor = document.querySelectorAll('.color');
const buttonColorChange = document.getElementById('button-random-color');
const coluna = document.getElementById('coluna');
const pixel = document.getElementById('pixel');
let colorSelected = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.querySelector('#color-palette');
let colorPaint = '#000';


// Random color
function colorChange() {
    let colorHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let colorRandom = ['#'];
    for (index = 1; index <= 3; index += 1){
        for (i = 1; i <=6; i += 1){
            colorRandom[i] = colorHex[Math.floor(Math.random() * 16)];
        }
        randomColor[index].style.backgroundColor = colorRandom.join('');
    }  
    saveInLocalStorage();
}
buttonColorChange.addEventListener('click', colorChange);

// Saving in localStorage
function saveInLocalStorage(){
    const color1 = randomColor[1].style.backgroundColor;
    const color2 = randomColor[2].style.backgroundColor;
    const color3 = randomColor[3].style.backgroundColor;
    localStorage.setItem('colorPalette', JSON.stringify([color1, color2, color3]));
}
// Recovering from localStorage
function recoveryPalette(){
    const recoveryParams = JSON.parse(localStorage.getItem('colorPalette'));
    if (recoveryParams != null) {
        randomColor[0].style.backgroundColor = '#000';
        randomColor[1].style.backgroundColor = recoveryParams[0];
        randomColor[2].style.backgroundColor = recoveryParams[1];
        randomColor[3].style.backgroundColor = recoveryParams[2];
    } 
 

}
window.addEventListener('load', recoveryPalette);


for (index = 1; index <= 5; index += 1){
    const coluna = document.createElement('div');
    coluna.classList.add('coluna');
    for (i = 1; i <= 5; i += 1){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('click', (event) =>{
            event.target.style.backgroundColor = colorPaint;
        })
        coluna.appendChild(pixel);
    }
    pixelBoard.appendChild(coluna);
}

function selectedColor (event){
    if (colorSelected[0].classList.contains('selected') || colorSelected[1].classList.contains('selected') || colorSelected[2].classList.contains('selected') || colorSelected[3].classList.contains('selected')){
        colorSelected[0].classList.remove('selected');
        colorSelected[1].classList.remove('selected')
        colorSelected[2].classList.remove('selected')
        colorSelected[3].classList.remove('selected')
    }
    event.target.classList.add('selected');
    colorPaint = event.target.style.backgroundColor;    
}
colorSelected[0].addEventListener('click', selectedColor);
colorSelected[1].addEventListener('click', selectedColor);
colorSelected[2].addEventListener('click', selectedColor);
colorSelected[3].addEventListener('click', selectedColor);

// https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/

