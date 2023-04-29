fetch('https://api.noroff.dev/api/v1/gamehub')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log(data)
                    data.forEach(game => {
                        const outerDiv = document.createElement('div');
                        const game2Div = document.createElement('div');
                        game2Div.classList.add('XBOXgame');
                        outerDiv.appendChild(game2Div);

                        const img = document.createElement('img');
                        img.src = game.image;
                        game2Div.appendChild(img);

                        const title = document.createElement('h3');
                        title.innerText = game.title;


                        const link = document.createElement('a');
                        link.href = 'game-page.html?id=' + game.id;
                        link.appendChild(title);

                        game2Div.appendChild(link);

                        const price = document.createElement('p');
                        price.innerText = 'Price: $' + game.price
                        game2Div.appendChild(price);

                        document.querySelector('section').appendChild(outerDiv);
                    })
                })
                .catch(error => console.log(error));       