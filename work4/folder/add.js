//--створити масив з:
//     - з 5 числових значень
//let numbers =[11, 22, 33, 45, 55]
// - з 5 стічкових значень
//let asd = ['hello', 'hi', 'buy', 'we', 'they']
// - з 5 значень стрічкового, числового та булевого типу
//let all = [21, true, -5, 'live', false]
// - та вивести його в консоль
//console.log(numbers);
//console.log(asd);
//console.log(all)
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
//numbers = [2,17,13,6,22,31,45,66,100,-18]
// 1. перебрати його циклом while
//let i = 0;
//while (i <numbers.length)
//    let number = numbers [i];{
//    console.log(number);
//    }
//    i ++;
//}
//     2. перебрати його циклом for
//for (const number of numbers) {
// console.log(number)
//}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//let i = 0;
//  while (i < numbers.length) {
//      if (i % 2 === 1) {
//          console.log(numbers[i]);
//      }
//      i++;
//  }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//numbers = [2,17,13,6,22,31,45,66,100,-18]
// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 ===1)
//     {
//         console.log(numbers[i])
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//let i = 0;
// while (i < numbers.length) {
//     if (numbers [i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення

//for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2===0)
//     {
//         console.log(numbers[i])
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
//for (let i = 0; i < numbers.length; i++) {
//      if (numbers[i] % 3===0) {
//          console.log('okten')
//      }
//      else{
//          console.log(numbers[i])
//      }
//  }
// 8. вивести масив в зворотньому порядку.
//for (let i = numbers.length - 1; i >= 0; i--) {
//     const number = numbers[i];
//     console.log( number)
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//let i = numbers.length-1;                      //1
//   while (i >=0 ) {
//    console.log(numbers[1]);{
//    }
//    i --;
//}
//for (let i =numbers .length - 1; i >= 0; i--) {
//    const arrayElement = numbers[i];
//}
//let i = numbers.length-1;                      //3
//  while (i >=0 ) {
//      if (i % 2 === 1) {
//          console.log(numbers[i]);
//      }
//      i--;
//  }
//console.log(numbers)
//
//for (let i < numbers.length -1; i<=0; i--) {       //4
//     if (numbers[i] % 2===1)
//     {
//         console.log(numbers[i])
//     }
// }
//let i = numbers.length-1;                                   //5
// while (i >=0) {
//     if (numbers [i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i--;
// }
//
//for (let i < numbers.length -1; i<=0; i--) {            //6
//     if (numbers[i] % 2===0)
//     {
//         console.log(numbers[i])
//     }
// }
//for (let i = numbers.length -1; i>=0; i--) {              //7
//       if (numbers[i] % 3===0) {
//           console.log('okten')
//       }
//       else{
//           console.log(numbers[i])
//       }
//   }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//numbers = [2,17,13,6,22,31,45,66,100,-18]
//for (const number of numbers) {
//  console.log(number)
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//sda =['user', 'status', 'age', 'name', 'length', 'green','black', 'red', 'blue','pink']
//for (const element of sda) {
// console.log(element)
//}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//sda1 =['user','status','age','name',13, 31,45,66,100,-18]
//for (const element of sda1) {
// console.log(element)
//}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// булеві елементи
//sda =['user',false,'age','name',13,true,45,66,true,-18]
// for (const element of sda) {
//  if (typeof element === 'boolean') {
//
//   console.log(element);
//  }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи
//for (const element of sda) {
//  if (typeof element === 'number')
//   console.log(element);
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи
//for (const element of sda) {
//  if (typeof element === 'string')
//   console.log(element);
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//arr = []
// Вивести в консоль всі його елементи в циклі.

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for (let i = 0; i < 10; i++) {
//     const element = arr[i];{
//         console.log(i)
//document.write(`<div>{i}</div>`);
//     }
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for (let i = 0; i < 100; i++) {
//          console.log(i)
// document.write(`<div>${i}</div>`);
//      }
//
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//for (let i = 0; i < 100; i+=2) {
//         console.log(i)
//document.write(`<div>${i}</div>`);
//     }
//
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//  for (let i = 0; i < 100; i++)
//          if (i % 2 === 0) {
//              console.log(i)
//              document.write(`<div>${i}</div>`);
//          }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i)
//         document.write(`<div>${i}</div>`);
//     }
// }
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
//books = [{name:'Пікнік на узбіччі',authors:['А.Стругацький','Б.Стругацький'],pages:220,genres:['фантаст','роман']},
//     {name:'Воно',authors: ['Стівен кінг'],pages:1000, genres:['фантастика','жахи','фентезі']},
//     {name:'Тріумфальна арка', authors: ['Еp.M.Ремарк'],pages:300,genres: ['воєнна література','драма']},
//     {name:'Бот ',authors: ['Макс Кідрук '],pages:450,genres: ['наукова фантастика']},
//     {name:'Добрі передвісники',authors: ['Ніл Гейман','Террі Пратчетт'],pages:470,genres: ['гумористичне фентезі']}
// ]
// -знайти найбільшу книжку.
//let count = books[0]
// for (const book of books) {
//     if (book.pages >count.pages){
//         count = book
//     }
// }
// console.log(count)
// - знайти книжку/ки з найбільшою кількістю жанрів
//let count = books[0]
// for (const book of books) {
//     if (book.genres.length >count.genres.length){
//         count = book
//     }
// }
// console.log(count)
// - знайти книжку/ки з найдовшою назвою
//let count = books[0]
// for (const book of books) {
//     if (book.name.length >count.name.length){
//         count = book
//     }
// }
// console.log(count)
// - знайти книжку/ки які писали 2 автори
//let count = books[0]
// for (const book of books) {
//     if (book.authors.length === 2);{
//       count = book
//         console.log(count)
//             }
//         }


// - знайти книжку/ки які писав 1 автор
//let count = books[0]
//  for (const book of books){
//      if (book.authors.length === 1){
//          count = book
//          console.log(count)
//              }
//          }
