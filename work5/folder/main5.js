//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//function min(a,b,c){
//     if (a>b && b<c){
//         console.log(b);
//     }else if (b>a && a<c){
//         console.log(a);
//     }else if(b>c && c<a){
//         console.log(c);
//     }else {
//         console.log('Nan')
//     }
// }
// min(10,20,30)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//function max(a,b,c){
//     if (a>b && b>c){
//         console.log(a);
//     }else if (b>a && a>c){
//         console.log(b);
//     }else if(c>b && b>a){
//         console.log(c);
//     }else {
//         console.log('Nan')
//     }
// }
// max(10,20,30)

// - створити функцію яка повертає найбільше число з масиву
//const arr=[10,15,4,45,2];
// const max = (array)=>{
//     let max = array[0];
//     for (const item of array) {
//         if (item>max){
//             max=item;
//         }
//     }
//     return max;
// }
// console.log(max(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//const arr=[10,15,4,45,2];
// function of(array){
//     let sum = 0;
//     for (const element of array) {
//         sum += element;
//     }
//     return sum/array.length;
// }
// console.log(of(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math
// використовувати заборонено);
//function fon(...arguments) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item > max) {
//             max = item;
//         }
//         if (item < min) {
//             min = item;
//         }
//     }
//     console.log(max);
//     return min;
// }
// let fonA = fon (10,20,51,14,6);
// console.log(fonA);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//let arr =[];
// function of(array){
//     for (let i = 0; i < 10; i++) {
//         arr[i]=Math.floor(Math.random()*100);
//     }
//     console.log(arr);
// }
// of();
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
//let arr =[];
// function of(limit){
//     for (let i = 0; i < limit; i++) {
//         arr[i]=Math.floor(Math.random()*100);
//     }
//     console.log(arr);
// }
// of(6);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//const arr =[1,2,3];
//   function of(array) {
//       let newArray = [];
//       for (let i = array.length - 1, l = 0; i>=0; i--){
//           newArray[l++] = array[i];
//       }
//       return newArray;
//   }
//   console.log (of(arr));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або
// конкатенує їх між собою.
//const of = (...arguments)=> arguments.length===2 ? arguments[0]+ arguments[1]: arguments[0];
//  let of1 = of(10,5);
//  let of2 = of(10)
//  console.log(of1);
// console.log(of2)

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий
// результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
//const arr1 =[1,2,3,4];
// const arr2 =[2,3,4,5];
// function of(array1,array2){
//     let res = [];
//     let xxx = array1.length >= array2.length ? array1:array2;
//     for (let i = 0; i < xxx.length; i++) {
//         res[i]= (array1[i] || 0) + (array2[i] ||0);
//     }
//     return res;
// }
// console.log(of(arr1,arr2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//const arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// function ofo(array){
//     let newArray=[];
//     for (let i = 0, l=0; i < array.length; i++){
//         for (const key in array[i]) {
//             newArray[l++] = key;
//         }
//     }
//     return newArray;
// }
// console.log(ofo(arr));
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//const arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
//  function foo(array){
//      let newArray=[];
//      for (let i = 0, l =0; i < array.length; i++) {
//          for (const key in array[i]) {
//              newArray[l++] = array[i][key];
//          }
//      }
//      return newArray;
//  }
//  console.log(foo(arr));
        

