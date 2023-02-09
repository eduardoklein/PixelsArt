const randomColor = document.querySelectorAll('.color');
const buttonColorChange = document.getElementById('button-random-color');

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

function saveInLocalStorage(){
    const color1 = randomColor[1].style.backgroundColor;
    const color2 = randomColor[2].style.backgroundColor;
    const color3 = randomColor[3].style.backgroundColor;
    localStorage.setItem('colorPalette', JSON.stringify([color1, color2, color3]));
}

function recoveryPalette(){
    const recoveryParams = JSON.parse(localStorage.getItem('colorPalette'));
    if (recoveryParams != null) {
        randomColor[1].style.backgroundColor = recoveryParams[0];
        randomColor[2].style.backgroundColor = recoveryParams[1];
        randomColor[3].style.backgroundColor = recoveryParams[2];
    } 
 

}

window.addEventListener('load', recoveryPalette);

