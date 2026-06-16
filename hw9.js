//1.
const titleEl = document.querySelector('.title');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', function() {
    if (titleEl.textContent.trim()) {
    titleEl.textContent = '';
    } else {
        titleEl.textContent = 'Заголовок';
    }
})

/* //2.
const pEl = document.querySelector('.text');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', function(){
    pEl.style.color = 'green';
}) */

/* //3.
const titleEl = document.querySelector('.title');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', function(){
    titleEl.textContent = 'Привет, мир!';
})
 */

/* //4.
const elems = document.querySelectorAll('.description');
elems.forEach((elem) => {
    elem.textContent = 'Измененный текст';
}) */

/* //5.

const elems = document.querySelectorAll('.description');

elems.forEach((elem) => {
    elem.textContent = 'Новый текст';
}) */

/* //6.
const btnEl = document.querySelector('.btn');
const newEl = document.createElement('p');
newEl.textContent = 'Новый абзац';
btnEl.addEventListener('click', function(){
    document.body.appendChild(newEl);
}) */

/* //7.
const descEl = document.querySelector('.description');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', function(){
    descEl.remove();
}) */
