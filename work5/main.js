//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//function pl(a,b){
//     return (a*b);
// }
// let x = pl(10,20);
// console.log(x)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//function pl(p,r){
//     return (p*r)*2;
// }
// let x = pl(3.14, 15);
// console.log(x)
//або стрілочною
//let pl= (p,r) => (p*r)*2;
//let x = pl(3.14, 15);
//console.log(x)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//function pl(p,h,r){
//     return(p*r)*2*h;
// }
// let x=pl(3.14,10,8);
// console.log(x)
//або
//let pl= (p,h,r) => (p*r)*2*h;
//let x=pl(3.14,10,8);
//console.log(x)
// - створити функцію яка приймає масив та виводить кожен його елемент
//function arrayPrinter(arr){
//     for (const item of arr) {
//         console.log(item);
//     }
// }
// arrayPrinter([11,22,33])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//function par() {
//   document.write(`<p>${arguments[0]}</p>`);
// }
// par('hello okten')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//let item = ads
//  function ads(text){
//   document.write(`<ul>`);
//   for (let i = 0; i <= 2; i++) {
//     document.write(`<li>${text}</li>`);
//   }
//   document.write(`</ul>`);
// }
// ads('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//let item = ads
//  function ads(text,counter){
//    document.write(`<ul>`);
//      for (let i = 0; i <= counter; i++) {
//        document.write(`<li>${text}</li>`);
//      }
//      document.write(`</ul>`);
//  }
//  ads('hello',2)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//function arrayPrint(arr) {
//   document.write(`<ul>`);
//   for (const element of arr) {
//     document.write(`<li>${element}</li>`);
//   }
//   document.write(`</ul>`);
// }
// arrayPrint([11,22,'hello',true])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//function usersPrint(arr){
//      for (const item of arr) {
//           document.write(`<div>Name- ${item.name}, Age- ${item.age}, ID- ${item.id}</div>`);
//      }
// }
// users = [
//      {name: 'vasya', age: 31, id: 22},
//      {name: 'petya', age: 30, id: 33},
//      {name: 'kolya', age: 29, id: 44},
//      {name: 'olya', age: 28, id: 55},
//      {name: 'max', age: 30, id: 65},
//      {name: 'anya', age: 31, id: 75},
//      {name: 'oleg', age: 28, id: 85},
//  ];
//
// usersPrint(users)
//
// два станні завдання самостшйно зробити не вдалось, розбиралась вже на консультації
// - створити функцію яка повертає найменьше число з масиву
//let arr = [1,20,105];
//
// function foo(array){
//     let min = array[0];
//     for (const item of array) {
//         if (item<min){
//             min = item;
//         }
//     }
//     return min;
// }
// let foo1 =foo(arr);
// console.log(foo1);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//let arr =[1,2,3];
// function foo(array){
//     let sum = 0;
//     for (const element of array) {
//         sum += element;
//     }
//     return sum;
// }
// console.log(foo(arr));