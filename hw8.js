const responseOptions = ['камень', 'ножницы', 'бумага']


function playRockPaperScissors(){
    let userAnswer = prompt('Камень, ножницы, бумага').toLocaleLowerCase();

    if(!responseOptions.includes(userAnswer)){
        alert('Вы ввели некорректный вариант');
        return;
    };

    let randomResponse = responseOptions[Math.floor(Math.random()*3)];
    if(userAnswer === randomResponse){
        alert('Ничья');
    } else if (
        (userAnswer === 'камень' && randomResponse === 'ножницы') ||
        (userAnswer === 'ножницы' && randomResponse === 'бумага') ||
        (userAnswer === 'бумага' && randomResponse === 'камень')
    ) {
        alert(`Ваш выбор: ${userAnswer},\nВыбор компютера: ${randomResponse}. \nВы выиграли`);
    } else {
        alert(`Ваш выбор: ${userAnswer}, \nВыбор компютера: ${randomResponse}. \nВы проиграли`);
    }
    
}


/* //1.
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

let newArr = people.sort((a, b) => a.age - b.age);
console.log(newArr); */

/* //2.
function isPositive(elem) {
    return elem > 0;
}

function isMale(elem) {
    return elem.gender === 'male'
}

function filter(arr, func) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); */

/* //3.
    let internalId = setInterval(() => {
        console.log(new Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(internalId);
        console.log('30 секунд прошло');
    }, 30*1000);
 */
/* //4.
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
}) */

/* //5.
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => {
    sayHi('Глеб');
}); */