let x = +prompt( 'enter your number');
if (x === 0) {
    console.log('невірно');
} else {
    console.log ('вірно')
}

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

let day = +prompt( 'enter your data');
if ( day < 10){
    document. write('<h2>I декада<h2>');
}else if (day >= 11 && day < 20){
    document.write ('<h2>ІІ декада<h2>');
}else if (day >= 21 && day < 31) {
    document.write ('<h2>ІІІ декада</h2>');
}

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
}



let a = prompt() || 'default';
console.log(a)