const btnRandom = document.querySelector('.btn-random');
const bgcMain = document.querySelector('.main')

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

btnRandom.addEventListener('click', function(){
    bgcMain.style.backgroundColor = getRandomColor();
});