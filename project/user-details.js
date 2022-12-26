// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули

//const url = new URL(location.href);
// const Id = url.searchParams.get('user');
//

// fetch(`https://jsonplaceholder.typicode.com/users/${Id}`)
//      .then(value => value.json())
//      .then(value => {
//         for (const item in value) {
//
//             const userDiv = document.createElement('div');
//              if (typeof value[item] !== 'object'){
//                  userDiv.innerText = `${item} ${value[item]}`;
//              } else {
//                 userDiv.innerText = `${item} :`;
//
//                  for (const key in value[item]) {
//                      const userInnerDiv= document.createElement('div');
//                      if (typeof value[item][key] !== 'object'){
//                          userInnerDiv.innerText = `${key} ${value[item][key]}`;
//                      }else{
//                          userInnerDiv.innerText = `${key} :`;
//
//                          for (const element in value[item][key]) {
//                              const htmlDivElement = document.createElement('div');
//                              if (typeof value[item][key][element] !== 'object'){
//                                  htmlDivElement.innerText = `${element} ${value[item][key][element]}`;
//                              }
//                              userInnerDiv.append(htmlDivElement);
//                          }
//
//                      }
//                      userDiv.append(userInnerDiv);
//                  }
//              }
//
//              document.body.append(userDiv);
//          }
//
//      });


const url = new URL(location.href);
const id = url.searchParams.get('user_id');
let box = document.createElement('div');
box.classList.add('box');
document.body.append(box);


fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(value => value.json())
    .then(value => {


        for (const item in value) {

            const userDiv = document.createElement('div');
            if (typeof value[item] !== 'object'){
                userDiv.innerText = `${item} ${value[item]}`;
            } else {
                userDiv.innerText = `${item} :`;

                for (const key in value[item]) {
                    const userInnerDiv= document.createElement('div');
                    if (typeof value[item][key] !== 'object'){
                        userInnerDiv.innerText = `${key} ${value[item][key]}`;
                    }else{
                        userInnerDiv.innerText = `${key} :`;

                        for (const element in value[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object'){
                                htmlDivElement.innerText = `${element} ${value[item][key][element]}`;
                            }
                            userInnerDiv.append(htmlDivElement);
                        }

                    }
                    userDiv.append(userInnerDiv);
                }
            }
            box.append(userDiv);
        }

    });



// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра
// має детальну інфу про поточний пост.

// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .

let btn = document.createElement('button');
btn.classList.add('btn');
document.body.append(btn);
btn.innerText=`post of current user`

let htmlDivElement = document.createElement('div');
htmlDivElement.classList.add('div1');
document.body.appendChild(htmlDivElement);
btn.onclick = function (){
    fetch('https://jsonplaceholder.typicode.com/users/'+ id +'/posts')
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {

                let div = document.createElement('div');
                div.classList.add('list');
                div.innerText = post.title;

                let a = document.createElement('a');
                a.innerText = 'details about post';
                a.classList.add('a');
                a.href = 'post-details.html?post='+ post.id;

                div.appendChild(a);
                htmlDivElement.append(div);

            }


        })


    btn.disabled = 'true';
};


