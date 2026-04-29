/* function quessNumber(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userNumber = +prompt('Угадайте число от 1 до 100');
    
    while (randomNumber !== userNumber){
        if(userNumber === null){
            alert('Вы нажали "Отмена". Игра прервана');
            break;
        } else if (!Number(userNumber)){
            alert('Не число! Игра прервана');
            break;
        } else if (userNumber < 0 || userNumber > 100){
            alert('Игра прервана');
            break;
        }

        if (randomNumber > userNumber) {
            alert('Загаданное число больше вашего');
        } else if (randomNumber < userNumber) {
            alert('Загаданное число меньше вашего');
        }
        userNumber = +prompt('Введите число еще раз');

        alert('Вы угадали!!!');
    };    
} */


//1. 

/* function getMin(a, b) {
    if(a >= b){
        return b;
    } else{
        return a;
    }
} */

    // ИЛИ

function getMin(a, b){
    return a >= b ? b : a;
}

console.log(getMin(8, 4));
console.log(getMin(5, 15));
console.log(getMin(8, 8));

//2.