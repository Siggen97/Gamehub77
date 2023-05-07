const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const apiUrl = 'https://api.noroff.dev/api/v1/gamehub/' + productId;

fetch(apiUrl)
	.then((response) => response.json())
	.then((data) => {
		const outerDiv = document.createElement('div');
		const game2Div = document.createElement('div');
		game2Div.classList.add('XBOXgame');
		outerDiv.appendChild(game2Div);

		const productTitle = document.createElement('h3');
		productTitle.innerText = data.title;
		outerDiv.appendChild(productTitle);

		const productImage = document.createElement('img');
		productImage.src = data.image;
		game2Div.appendChild(productImage);

		const productPrice = document.createElement('p');
		productPrice.innerText = 'Price: ' + data.price;
		game2Div.appendChild(productPrice);

		const releaseDate = document.createElement('p');
		releaseDate.innerText = 'Release Date: ' + data.released;
		game2Div.appendChild(releaseDate);

		const ageRating = document.createElement('p');
		ageRating.innerText = data.ageRating;
		game2Div.appendChild(ageRating);

		const titleDescription = document.createElement('div');
		titleDescription.classList.add('titleDescription');

		const description = document.createElement('p');
		description.classList.add('gameDescription');
		description.innerText = data.description;
		titleDescription.appendChild(productTitle);
		titleDescription.appendChild(description);
		outerDiv.appendChild(titleDescription);

		document.querySelector('section').appendChild(outerDiv);
	})
	.catch((error) => {
		console.error('Error fetching product data:', error);
	});
