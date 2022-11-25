//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
//let str='hello world'
//console.log(str.length)
//let str1='lorem ipsum'
//console.log(str1.length)
//let str2='javascript is cool'
//console.log(str2.length)
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
//let str = ' dirty string   ';
//let s = str.trim();
//console.log(s);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//let str = 'Ревуть воли як ясла повні';
//let stringToarray = str.split(' ')
//console.log(stringToarray)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на
// стрінгові.
//arr = [10,8,-7,55,987,-1011,0,1050,0];
// let newArr = arr.map(item => item +'');
// console.log(newArr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
//const sortNums = (direction,arr) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         arr.sort((a, b) => b - a);
//     }
//     return arr;
// }
//console.log(sortNums('ascending', nums));
// sortNums(nums,'descending') // [21,11,3]
//let nums = [11,21,3];
//console.log(sortNums('descending', nums));

// - є масив
//let coursesArray = [
//      {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//      {title: 'Python Complex', monthDuration: 6},
//      {title: 'QA Complex', monthDuration: 4},
//      {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
//  ];
// -- відсортувати його за спаданням за monthDuration
//console.log(coursesArray.sort(function (a, b){
//     if (a.monthDuration < b.monthDuration){
//         return 1;
//     }
//     if (a.monthDuration > b.monthDuration){
//         return -1;
//     }
//     if (a.monthDuration === b.monthDuration){
//         return 0;
//     }
// }));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//let filter= coursesArray.filter((item) => item.monthDuration>5);
//console.log(filter);

// описати колоду карт
//const suits =[
//     {cardSuit: 'heart', color:'red'},
//     {cardSuit: 'diamond', color:'red'},
//     {cardSuit: 'spade', color:'black'},
//     {cardSuit: 'club', color:'black'},
// ]
// const cardNames =[6,7,8,9,10,'jack','queen','king','ace'];
// const decks=[];
// for (const suit of suits) {
//     for (const cardName of cardNames) {
//         const card={
//             cardSuit:suit.cardSuit,
//             value: cardName,
//             color: suit.color,
//         }
//         decks.push(card);
//     }
// }
// console.log(decks);
// - знайти піковий туз
//let filter = decks.filter(deck => deck.cardSuit === 'clubs' && deck.value === 'ace');
//console.log(filter)
// - всі шістки
//let filter = decks.filter(deck => deck.value === 6);
//console.log(filter)
// - всі червоні карти
//let filter = decks.filter(deck => deck.color === 'red');
//console.log(filter)
// - всі буби
//let filter = decks.filter(deck => deck.cardSuit === 'diamond');
//console.log(filter)
// - всі трефи від 9 та більше
//let filter = decks.filter(deck => (deck.cardSuit === 'spade' && deck.value >= 9) ||
//    (deck.cardSuit === 'spade' && typeof deck.value ==='string' ));
//console.log(filter)

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//let reduce = decks.reduce((accum,deck) => {
//     if (deck.cardSuit==='spade'){
//     accum.spades.push(deck);}
// else if(deck.cardSuit==='diamond'){
//     accum. diamonds.push(deck);}
//     else if(deck.cardSuit==='heart'){
//     accum. hearts.push(deck);}
//     else if(deck.cardSuit==='club') {
//             accum.clubs.push(deck);}
//             return accum;
//         },{spades:[],diamonds:[],hearts:[],clubs:[]});
// console.log(reduce);