const randomColor = document.querySelectorAll('.color');
const buttonColorChange = document.getElementById('button-random-color');

function colorChange() {
    let colorHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let colorRandom = ['#'];
    for (index = 1; index <= 3; index += 1){
        for (i = 1; i <=6; i += 1){
            colorRandom[i] = colorHex[Math.floor(Math.random() * 16)];
        }
        console.log(randomColor[index]);
        console.log(colorRandom.join(''));
        randomColor[index].style.backgroundColor = colorRandom.join('');
    }   
}   

 buttonColorChange.addEventListener('click', colorChange);

function salvarLocalStorage() {
    localStorage.setItem('color-palette', randomColor);
}
