//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
// 1, 0, -3

let x = +prompt( 'enter your number');
if (x === 0) {
    console.log('невірно');
}else{
    console.log ('вірно')
}
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt( 'enter your time');
if ( time < 15){
   document. write('<h2>first<h2>');
}else if (time >= 16 && time < 30){
   document.write ('<h2>second<h2>');
}else if (time >= 31 && time < 45) {
    document.write ('<h2>third</h2>');
}else if (time >= 46 && time < 59){
    document.write  ('<h2>fourth</h2>')
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
//(у першу, другу чи третю).

let day = +prompt( 'enter your data');
if ( day < 10){
    document. write('<h2>I декада<h2>');
}else if (day >= 11 && day < 20){
    document.write ('<h2>ІІ декада<h2>');
}else if (day >= 21 && day < 31) {
    document.write ('<h2>ІІІ декада</h2>');
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = +prompt('enter numDay')
switch (week) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
        default:
            console.log('???');

}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let user1 = [100,200]
if (user1 === 100>200) {
    console.log('true');
}else{
    console.log('false')
}

let user2 = [100,100]
if (user2 === 100!=100) {
    console.log('false');
}else{
    console.log('true')
}


//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподыбне, тобто кастується до false)
let a = prompt() || 'default';
console.log(a)