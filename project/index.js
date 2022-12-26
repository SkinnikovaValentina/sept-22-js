//В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.


const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
                let box = document.createElement('div');
                box.classList.add('box');
                box.innerText= `${user.id}  ${user.name}`;

                let button = document.createElement('a');
                button.classList.add('button');
                button.innerText = `Click`;
                button.href = 'user-details.html?user_id='+ user.id;

                let btn = document.createElement('div');
                btn.classList.add('btn');
                btn.append(button);
                box.append(btn);
                container.append(box);

        }



    });









