function attachEvents() {                                                          // 1. Функция за долепване на действия към бутоните
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);  // 1.1 Добавяме ev listener към съответния бутон
    document.getElementById('btnViewPost').addEventListener('click', loadDetails); // 1.2 Добавяме ev listener към съответния бутон

                                                                                   // 1.3 Пиша си асинхронни функции loadPosts и loadDetails
}

attachEvents();

async function loadPosts() {                                                    // 5. Функцията, която ще се изпълни при натискането на Load Posts бутона 

    let menu = document.getElementById('posts');                                // 5.1 Взимаме падащото меню, за да можем да load-нем новите опции
    menu.replaceChildren();                                                     // 5.2 Изчистваме менюто, за да не се наслагват всеки път

    let posts = await getAllPosts();                                            // 5.3 Извикваме функцията (2), която ще ни даде всички постове като обекти


    for (let post of posts){                                                    // 5.4 Минаваме през всеки обект
        let option = document.createElement('option');                          // 5.5 Създаваме елемент, който е от тип option

        option.value = post.id;                                                 // 5.6 Присвояваме value на елемента да е равен на ID-то на поста
                                                                                // това ни трябва в стъпка 6.2, за да можем да вземем точния пост

        option.textContent = post.title;                                        // 5.7 Правим така, че на опцията да се изписва заглавието на поста

        menu.appendChild(option);                                               // 5.8 Добавяме новия елемент към падащото меню
        
    }
}

async function loadDetails() {                                                  // 6. Функцията, която ще се изпълни при натискането на View (Load Details) бутона 

    let menu = document.getElementById('posts');                                // 6.1 Взимаме падащото меню

    let postId = menu.value;                                                    // 6.2 Взимаме ID-то на поста, който е избран от падащото меню

    let postData = await getPostByID(postId);                                   // 6.3 Взимаме обекта със същото ID, върнат ни от извикването на 3. 
    let comments = await getCommentsByPostId(postId);                           // 6.4 Взимаме всички обекти на съответния пост, които ни се връщат от извикването на 4.
    
    document.getElementById('post-title').textContent = postData.title;         // 6.5 Правим така, че заглавието на поста да си влезе в съответния елемент
    document.getElementById('post-body').textContent = postData.body;           // 6.6 Правим така, че съдържанието на поста да си влезе в съответния елемент
    
    let list = document.getElementById('post-comments');                        // 6.7 Взимаме елемента, съдържащ всички коментари

    list.replaceChildren();                                                     // 6.8 Нулираме го, за да не се наслагват

    for (let comment of comments){                                              // 6.9 Минаваме през всеки коментар
        let row = document.createElement('li');                                 // 6.10 За съответния коментар му създаваме елемент
        row.id = comment.id;                                                    // 6.11 Правим ID-то на елемента, да е същия като ID-то на коментара

        row.textContent = comment.text;                                         // 6.12 Правим така, че съдържанието на коментара(eлемента) да си стане каквото е в съдържанието на коментара(обекта)
        list.appendChild(row);                                                  // 6.13 Добавяме новия елемент към списъка с коментари
    }

}

async function getAllPosts() {                                                  // 2. Функция за извеждане на всички постове като обекти

    let res = await fetch('http://localhost:3030/jsonstore/blog/posts');        // 2.1 Правим заявка към URL-a

    if (!res.ok){
        alert('Request error');
        throw new Error('Request error');
    }

    let data = await res.json();                                                // 2.2 Взимаме данните след изпълнението на 1.1

    return Object.values(data);                                                 // 2.3 Връщаме обекти от данните
}

async function getPostByID(postId) {                                            // 3. Функция за взимане на конкретен пост която получава postId

    let res = await fetch('http://localhost:3030/jsonstore/blog/posts');        // 3.1 Правим заявка към съответния URL
    let posts = await res.json();                                               // 3.2 Взимаме данните след изпълнението на 1.1

    return posts[postId];                                                       // 3.3 Връщаме обект на поста със съответното ID
}

async function getCommentsByPostId(postId) {                                    // 4. Функция за взимане на коментарите на конкретен пост, която получава postId

    let res = await fetch('http://localhost:3030/jsonstore/blog/comments');     // 4.1 Правим заявка към URL-a
    let data = await res.json();                                                // 4.2 Взимаме данните след изпълнението на 1.1

    return Object.values(data).filter(c => c.postId == postId);                 // 4.3 Връщаме обекти от данните 
                                                                                // като ги филтрираме така, че всеки обект да има postI0d,
                                                                                // който да е същия като този, подаден на функцията

}