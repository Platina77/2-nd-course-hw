//1.
/* for (let i = 1; i <= 2; i++) {
    console.log(`Привет${i}`);
} */

//--------------------------
//2.
/* for (let i = 1; i <= 5 ; i++) {
    console.log(i);
} */

//--------------------------
//3.
/* for (let i = 7; i <= 22; i++) {
    console.log(i);
} */

//--------------------------
//4.
/* let obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400,
}

for (const key in obj) {    
    console.log(`${key} - ${obj[key]}$`);
} */

//--------------------------
//5.

/* let n = 1000;
let num = 0;
 while(n >= 50){
    n = n/2;
    num++;
 }

 console.log(n);
 console.log(num); */

//--------------------------
//6.
/* let friday = 5;

for (let i = friday; i <= 31; i+=7) {
    for (let j = 1; j <= 31; j++) {
        if(i===j){
            alert(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
        }else{
            continue;
        }   
    }
} */

//или такой вариант

/* for (let i = friday; i <= 31; i+=7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`)
} */

//--------------------------

//Допы
//--------------------------
//1.
/* let k = 100;
let iterations = 0;

while(k >= 7){
    k-=7;
    iterations++;
}

console.log(k);
console.log(iterations); */

//--------------------------
//2.
/* let months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

for(let i = 0; i < months.length; i++){
    console.log(`${months[i]} - ${i + 1}`);
} */

//3.
/* let obj = {
    "название": "какое-то",
    "автор": "какой-то",
    "год издания": "какой-то",
    "жанр": "какой-то",
}

for (const key in obj) {
    console.log(key);
} */

//4.
/* 
let arr = [10, 30, 25, 8, 6, 546, 21465, 218521, 81611, 852546];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if(arr[i] < min){
        min = arr[i];
    }
}

console.log(min); */