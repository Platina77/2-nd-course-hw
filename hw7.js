function turnTheTextOver(){
    let userWord = prompt('Введите текст');
    alert(userWord.split('').reverse().join(''));
}

function answerTheQuizQuestions(){
    const quiz = [
           {
               question: "Какого цвета небо?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2 // номер правильного ответа
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];

       let count = 0;

       for(let i = 0; i < quiz.length; i++){
        let userAnswer = prompt(`${quiz[i].question}: ${quiz[i].options}`);
        
        if(Number(userAnswer) === quiz[i].correctAnswer){
            count++;
        }
       }

      alert(`Верных ответов: ${count}`);
}

/* //1.
let str = 'js';
console.log(str.toUpperCase()); */

/* //2.
function getNewArr(arr, str){
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(getNewArr(['он', 'она', 'они', 'мы'], 'он')); */

/* //3.
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num)); */

/* //4.
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32)); */

/* //5.
console.log(Math.ceil(Math.random()*10)); */

/* //6.
function arr(num){    
    let newArr = [];
    for (let i = 0; i < Math.ceil(num/2); i++){
        newArr.push(Math.random()*num);
    }
    return newArr;
}

console.log(arr(6)); */

//7.
/* function randomNum(num1, num2){
    return (Math.random() * (Math.max(num1, num2) - Math.min(num1, num2)) + Math.min(num1, num2));
}

console.log(randomNum(5, 10)); */

//8.
/* console.log(new Date()); */

//9.
/* let currentDate = new Date();
let date = new Date(currentDate.getTime() + 73*24*60*60*1000);
console.log(date); */

/* //10.

function formatDate(date){
    console.log("Дата: " + date.toLocaleDateString('ru-RU', {day: 'numeric', month: 'long', year: 'numeric'}) + "- это " + date.toLocaleDateString('ru-RU', {weekday: 'long'}));
}

formatDate(new Date()); */

