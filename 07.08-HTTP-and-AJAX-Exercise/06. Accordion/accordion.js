function solution() {
    const main = document.getElementById('main');
    const listUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const detailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/';

    fetch(listUrl)
        .then(res => res.json())
        .then(articles => {
            for (const article of articles) {
                const accordion = document.createElement('div');
                accordion.className = 'accordion';

                // Head div
                const head = document.createElement('div');
                head.className = 'head';

                const titleSpan = document.createElement('span');
                titleSpan.textContent = article.title;

                const button = document.createElement('button');
                button.className = 'button';
                button.id = article._id;
                button.textContent = 'More';

                head.appendChild(titleSpan);
                head.appendChild(button);

                // Extra div (initially hidden)
                const extra = document.createElement('div');
                extra.className = 'extra';
                extra.style.display = 'none';

                const paragraph = document.createElement('p');
                extra.appendChild(paragraph);

                // Append everything
                accordion.appendChild(head);
                accordion.appendChild(extra);
                main.appendChild(accordion);

                // Add button behavior
                button.addEventListener('click', () => {
                    if (button.textContent === 'More') {
                        fetch(detailsUrl + article._id)
                            .then(res => res.json())
                            .then(data => {
                                paragraph.textContent = data.content;
                                extra.style.display = 'block';
                                button.textContent = 'Less';
                            });
                    } else {
                        extra.style.display = 'none';
                        button.textContent = 'More';
                    }
                });
            }
        });
}

solution();
