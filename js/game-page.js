
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const apiUrl = 'https://api.noroff.dev/api/v1/gamehub/' + productId;

fetch(apiUrl)
	.then((response) => response.json())
	.then((data) => {
		const outerDiv = document.createElement('div');
		outerDiv.classList.add('product-container');

		const gameImageDiv = document.createElement('div');
		gameImageDiv.classList.add('game-image');
		const productImage = document.createElement('img');
		productImage.src = data.image;
		gameImageDiv.appendChild(productImage);
		outerDiv.appendChild(gameImageDiv);
		
		const titleDescription = document.createElement('div');
		titleDescription.classList.add('title-description');
		
		const productInfoDiv = document.createElement('div');
		productInfoDiv.classList.add('product-info');
		
		const productTitle = document.createElement('h3');
		productTitle.innerText = data.title;
		productInfoDiv.appendChild(productTitle);
		
		const description = document.createElement('p');
		description.classList.add('game-description');
		description.innerText = data.description;
		titleDescription.appendChild(productTitle);
		titleDescription.appendChild(description);
		productInfoDiv.appendChild(titleDescription);

		const productPrice = document.createElement('p');
		productPrice.innerText = 'Price: ' + data.price;
		productInfoDiv.appendChild(productPrice);
		
		const releaseDate = document.createElement('p');
		releaseDate.innerText = 'Release Date: ' + data.released;
		productInfoDiv.appendChild(releaseDate);
		
		const ageRating = document.createElement('p');
		ageRating.innerText = data.ageRating;
		productInfoDiv.appendChild(ageRating);
		
		outerDiv.appendChild(productInfoDiv);

		document.querySelector('section').appendChild(outerDiv);
	})

	
.catch((error) => {
		console.log('Error:', error); 
	});