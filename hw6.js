function arithmetic(){
    const actions = ['+', '-', '*', '/'];
    let action = actions[Math.floor(Math.random()*actions.length)];

    const numbers = [];

    for (let i = 0; i < 2; i++) {
        numbers.push(Math.round(Math.random()*10));    
    }

    alert(`Решите задачу: ${numbers[0]} ${action} ${numbers[1]}`);

    let userAnswer = +prompt('Ваш ответ');

    let answer = function(){
        if(action==='+'){
            return (numbers[0] + numbers[1]);
        } else if (action==='-'){
            return (numbers[0] - numbers[1]);
        } else if (action==='*'){
            return (numbers[0] * numbers[1]);
        } else if (action==='/'){
            return (numbers[0] / numbers[1]);
        }
    }

    if(answer() == userAnswer){
        alert('Вы выиграли!');
    } else{
        alert('Вы проиграли!');
    }
}

//1.
/* const arr =[1, 5, 4, 10, 0, 3]; */
/* for (const item of arr) {
    if (item !== 10){
    console.log(item);
    } else {
        break;
    }
} */

/* for (const item of arr) {
    if (item === 10) break;
    console.log(item);
} */

//2.

/* console.log(arr.indexOf(4)); */

/* for (const item of arr){
    if (item === 4){
        console.log(arr.indexOf(item));
    }
} */

//3.

/* const arr = [1, 3, 5, 10, 20];
console.log(arr.join(" ")); */

//4.
/* const arr = [];
for(let i = 0; i < 3; i++){
    let innerArr = [];
    for(let j = 0; j < 3; j++){
        innerArr.push(1);
    }
    arr.push(innerArr);
}

console.log(arr); */

//5.
/* const arr = [1, 1, 1];
for(let i = 3; i <= 5; i++){
    arr.push(2);
}

console.log(arr); */

//6.
/* const arr = [9, 8, 7, 'a', 6, 5];
console.log(arr.sort().filter(item => typeof item === 'number')); */

//7.
/* const arr = [9, 8, 7, 6, 5];

let answer = +prompt('Введите число');

arr.includes(answer) === true ? alert("Угадал!"): alert("Не угадал!"); */

//8.
/* let str = 'abcdef';
console.log(str.split('').reverse().join('')); */

//9.
/* const arr = [
    [1, 2, 3],
    [4, 5, 6]
]
const newArr = [...arr[0], ...arr[1]];
console.log(newArr); */

//10.
/* const arr = [5, 1, 8, 6, 7, 2, 4];
for (let i = 0; i < arr.length; i++) {
    i !== arr.length-1 ? console.log(arr[i] + arr[i+1]) : console.log(arr[i]);
} */

//11.
/* const arr = [5, 1, 8, 6, 7, 2, 4];
const newArr = arr.map(el => el**2);
console.log(newArr); */

//12.
/* const arr = ['дом', 'семья', 'работа'];
const newArr = arr.map(el => el.length);
console.log(newArr);
 */

//13.
/* const arr = [1, 5, -3, 4, -2];
const newArr = arr.filter(el => el < 0);
console.log(newArr); */

//14.
/* const arr = [];
for (let i = 0; i < 10; i++){
    arr.push(Math.ceil(Math.random()*10));
}

const newArr = arr.filter(el => el%2 === 0);

console.log(arr);
console.log(newArr); */

//15.
/* const arr = [];
for (let i = 0; i < 6; i++){
    arr.push(Math.ceil(Math.random()*10));
}

const newArr = arr.reduce(function(acc, num){
    return acc + num;
})

console.log(arr);
console.log(newArr/arr.length); */