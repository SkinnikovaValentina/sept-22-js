//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email ;
//     this.phone = phone;
// }
// let user1= new User(13,'anna','ivanova','olrta@gmail.com', 11111111);
// let user2= new User(25,'lora','perova','asujo@gmail.com',22222222);
// let user3= new User(43,'kora','ivanova','ahkf@gmail.com', 33333333 );
// let user4= new User(34,'bob','fedorov','asdf@gmail.com', 44444444);
// let user5= new User(55,'don','perova','asdf@gmail.com',55555555);
// let user6= new User(26,'poll','fedorov', 'lopg@gmail.com', 66666666);
// let user7= new User(76,'kate','ivanova' ,'asdf@gmail.com', 77777777);
// let user8= new User(89,'nik','perov','ydknbf@gmail.com',88888888);
// let user9= new User(91,'yan','perov','riop@gmail.com',99999999 );
// let user10= new User(10,'mary','fedorova','asdf@gmail.com',11010101011);
//
// let arrUsers =[];
//
// console.log(arrUsers)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

//let filter = arrUsers.filter (value => value.id %2 === 0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//console.log(arrUsers.sort(function (a, b){
//     return a.id-b.id;
// }));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

//class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
//  let user1= new Client(13,'anna','ivanova','olrta@gmail.com', 11111111,[1,2,3,4]);
//  let user2= new Client(25,'lora','perova','asujo@gmail.com',22222222,[1,2,3]);
//  let user3= new Client(43,'kora','ivanova','ahkf@gmail.com', 33333333,[1,2,3,4,5] );
//  let user4= new Client(34,'bob','fedorov','asdf@gmail.com', 44444444,[1,2,3,4,5,6]);
//  let user5= new Client(55,'don','perova','asdf@gmail.com',55555555,[1,2]);
//  let user6= new Client(26,'poll','fedorov', 'lopg@gmail.com', 66666666,[1,2,3,4]);
//  let user7= new Client(76,'kate','ivanova' ,'asdf@gmail.com', 77777777,[1,2,3,4,5,6,7]);
//  let user8= new Client(89,'nik','perov','ydknbf@gmail.com',88888888,[1,2,3]);
//  let user9= new Client(91,'yan','perov','riop@gmail.com',99999999,[1,2,3,4,5,6,7]);
//  let user10= new Client(10,'mary','fedorova','asdf@gmail.com',11010101011,[1,2,3,4,5,6,7,8]);
//
//  let arrUsers =[];
// arrUsers.push(user1,user2,user3, user4,user5,user6,user7,user8,user9,user10);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)
//console.log(arrUsers.sort(function (a, b){
//     return a.order.length-b.order.length;
//  }));

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

//     -- changeYear (newValue) - змінює рік випуску на значення newValue

//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//function Car(model,producer,year,maxSpeed,engine){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.engine = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function (){
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey} --${this[carKey]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed =function (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }
// const car = new Car('Peugeot','France', 2016,170,1.8)
// console.log(car);
// car.engine();
// car. info();
// car.increaseMaxSpeed(30);
// car.changeYear(2021);
// car.addDriver({name:'Yakov'});
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//class Car{
//     constructor(model,producer,year,maxSpeed,carEngine) {
//
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.carEngine = carEngine;
//     }
//     engine() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info() {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey} --${this[carKey]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
// let car = new Car('Peugeot','France', 2016,170,1.8)
// console.log(car);
// car.engine();
// car. info();
// car.increaseMaxSpeed(30);
// car.changeYear(2021);
// car.addDriver({name:'Yakov'});
// console.log(car);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name,age,footSize){
    this.name =name;
    this.age =age;
    this.footSize =footSize;
}
let cinderella1 = new Cinderella('Anna',22,36);
let cinderella2 = new Cinderella('Donna',29,37);
let cinderella3 = new Cinderella('Meri',31,35);
let cinderella4 = new Cinderella('Lora',25,38);
let cinderella5 = new Cinderella('Ket',32,39);
let cinderella6 = new Cinderella('Linda',28,40);
let cinderella7 = new Cinderella('Sindy',21,41);
let cinderella8 = new Cinderella('Lily',22,42);
let cinderella9 = new Cinderella('Tina',33,43);
let cinderella10 = new Cinderella('Polly',19,34);

 let arrayCinderella = [];
arrayCinderella.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,
    cinderella9,cinderella10);

class Prince{
    constructor(name, age, findFootSize) {
        this.name = name;
        this.age = age;
        this.findFootSize = findFootSize;
    }
}
let prince = new Prince('Loki', 35,38);

let findCinderellas = (arr,boy) => {
    for (const arrElement of arr) {
        if (arrElement.footSize === boy.findFootSize){
            console.log(`This is my Cinderella ${arrElement.name}`);
        }
    }
}
findCinderellas(arrayCinderella,prince);
















