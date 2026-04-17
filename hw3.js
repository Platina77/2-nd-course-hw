/* //1.

let password = 'пароль';
let answer = prompt('Введите пароль');

if (password===answer) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
} */

/* //2.
let c = 2;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
} */

/* //3.
let d = 5;
let e = 155;

if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
} */

/* //4.
let a = '2';
let b = '3';

alert(Number(a) + Number(b));
 */

/* //5.
let monthNumber = 12;

if (monthNumber > 12 || monthNumber < 1) {
    console.log('Некорректный номер месяца');
} else {
    switch (monthNumber) {
        case 1:
        case 2:
        case 12: 
            console.log('зима');
            break;
        case 3:
        case 4:
        case 5: 
            console.log('весна');
            break;
        case 6:
        case 7:
        case 8: 
            console.log('лето');
            break;
        case 9:
        case 10:
        case 11:  
            console.log('осень');
            break;
    }
} */

//доп. задание
/* //1.
let num = Number(prompt('Пожалуйста, введите любое число'));

if (isNaN(num)) {
    alert('Вы ввели не число');
} else if (num % 2 !==1) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}
 */

//2.
/* let clientOS = 0;
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1){
    console.log('Установите версию приложения для Android по ссылке');
} */

//3.
/* let clientOS = 0;
let clientDeviceYear = 2010;

if (clientOS === 0) {
    if (clientDeviceYear < 2015) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        console.log('Установите версию приложения для iOS по ссылке');
    }
    
} else if (clientOS === 1) {
    if (clientDeviceYear < 2015) {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    } else {
        console.log('Установите версию приложения для Android по ссылке');
    }
} */