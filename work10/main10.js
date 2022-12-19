//зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let list = document.createElement('ul');
document.body.append(list);


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const item of users) {
                let userLi = document.createElement('li');
                userLi.innerText= `${item.id}  ${item.name}`;
                list.append(userLi);

                let anchor = document.createElement('a');
                anchor.innerText = `Click`;
                userLi.append(anchor);
                anchor.href =`user-details.html?data=${item.id}`
        }

        });




