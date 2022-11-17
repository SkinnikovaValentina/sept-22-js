//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
//let str1='hello world';
// console.log(str1.indexOf('h'));
// console.log(str1.lastIndexOf('d'));
// let str2='lorem ipsum';
// console.log(str2.indexOf('l'));
// console.log(str2.lastIndexOf('m'));
// let str3='javascript is cool';
// console.log(str3.indexOf('j'));
// console.log(str3.lastIndexOf('l'));

// - Перевести до великого регістру наступні стрінгові значення
//'hello world','lorem ipsum','javascript is cool'
//let strA= 'hello world';
// console.log(strA.toUpperCase());
// let strB= 'lorem ipsum';
// console.log(strB.toUpperCase());
// let strC= 'javascript is cool'
// console.log(strC.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//let str1='HELLO WORLD';
// console.log(str1.toLocaleLowerCase());
// let str2='LOREM IPSUM';
// console.log(str2.toLocaleLowerCase());
// let str3='JAVASCRIPT IS COOL';
// console.log(str3.toLocaleLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//let str = ' dirty string   '
//console.log(str.substring(1,13))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//let split = str.split(' ')
//console.log(split)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на
// стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }