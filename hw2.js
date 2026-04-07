/* //1.
let a = 10;
alert(a);

a = 20;
alert(a);

//2.
let b = 2007;
alert(b);

//3.
let c = "Brendan";
alert(c);

//4.
let d = 10;
let e = 2;
alert(d + e);
alert(d - e);
alert(d * e);
alert(d / e);

//5.
let result = e**5;
alert(result);

//6.
a = 9;
b = 2;
alert(a % b);

//7.
let num = 1;
num+=5;
num-=3;
num*=7;
num/=3;
++num;
--num;
alert(num);

//8.
let age = +prompt("Сколько вам лет?");
alert(age);

//9.
let user = {
    name: "Марина",
    age: 47,
    isAdmin,
}

//10.
let name = prompt("Напишите Ваше имя");
alert(`Привет, ${name}`); */

//Доп. задание

let num = +prompt("Загадай любое число");
let num1 = num;
alert(num1*=2);
alert(num1+=10);
alert(num1/=2);
alert(num1 - num);
alert(`ответ: ${num1 - num}`);