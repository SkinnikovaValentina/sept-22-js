// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

//Стилізація проекту
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон.
// марджини і тд)

const url = new URL(location.href);
const post_id = url.searchParams.get('post');


const box1 = document.createElement('div');
box1.classList.add('box1');
document.body.append(box1);

fetch('https://jsonplaceholder.typicode.com/posts/'+ post_id)
  .then(value => value.json())
  .then(post=>{

      for (const postKey in post) {

          let p1 = document.createElement('p');
          p1.innerText =`${postKey}: ${post[postKey]}`;
          box1.append(p1);
      }
  });

const box = document.createElement('div');
box.classList.add('box');
document.body.append(box)
fetch('https://jsonplaceholder.typicode.com/posts/'+ post_id +'/comments')

    .then(value => value.json())
    .then(posts=> {
        for (const element of posts) {

            let box2 = document.createElement('div');
            box2.classList.add('box2');
            box2.innerText = `${element.body}`;
            box.append(box2);
            document.body.append(box);

        }

    });















