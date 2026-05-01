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

/* function getMin(a, b){
    return a >= b ? b : a;
}

console.log(getMin(8, 4));
console.log(getMin(5, 15));
console.log(getMin(8, 8)); */

//2.

/* function checkingEvenOdd(number) {
    return number % 2 === 0? console.log('Число четное') : console.log('Число нечетное')
}

checkingEvenOdd(5); */

//3.

/* function squareNumber(number) {
    console.log(number**2);
}

squareNumber(7); */

/* function squareNumber(number) {
    return number**2;
}

let squareNum = squareNumber(7);
console.log(squareNum); */

//4.

/* function years(){
    let userYear = prompt('Сколько Вам лет');
    if(userYear > 0 && userYear < 12){
        alert('Привет, друг!');
    } else if (userYear >= 13){
        alert('Добро пожаловать!');
    }else{
        alert('Вы ввели неправильное значение');
    }
}

years(); */

//5.

/* function ProductOfNumbers(num1, num2) {
    if(isNaN(num1)||isNaN(num2)){
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

console.log(ProductOfNumbers('fd', 54)); */

//6.

/* function ProductOfNumbers() {
    let userNum = +prompt('Введите число');
    let NumberCube = 0;
    if(isNaN(userNum)){
        return 'Переданный параметр не является числом';
    } else {
        NumberCube = userNum**3;
        return `${userNum} в кубе равняется ${NumberCube}`;
    }
}

console.log(ProductOfNumbers()); */

//7.

/* function getArea(){
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

let circle1 = {
    radius : 10,
    getArea,
    getPerimeter,
}

let circle2 = {
    radius : 12,
    getArea,
    getPerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter()); */