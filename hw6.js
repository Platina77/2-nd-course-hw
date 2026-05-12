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

/* console.log(answer()); */

if(answer == userAnswer){
    alert('Вы выиграли!');
} else{
    alert('Вы проиграли!');
}