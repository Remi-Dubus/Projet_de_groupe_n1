const cards = document.querySelector(".cards");
// Retirer la card restaurant mise en place dans le code html
cards.innerHTML = "";

// Tableau qui recense toutes les informations de toutes les cartes restaurant

// const top3 = [
// 	{
// 		picture:
// 			"https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// 		name: "Dragon doré",
// 		adresse: "9 rue Paul Louis Lande",
// 		rating: "❤️❤️❤️❤️",
// 	},
// 	{
// 		picture:
// 			"https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// 		name: "Dragon doré",
// 		adresse: "9 rue Paul Louis Lande",
// 		rating: "❤️❤️❤️❤️",
// 	},
// 	{
// 		picture:
// 			"https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// 		name: "Dragon doré",
// 		adresse: "9 rue Paul Louis Lande",
// 		rating: "❤️❤️❤️❤️",
// 	},
// ];

const newRestaurant = [
	{
		picture:
			"https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		name: "Dragon doré",
		adresse: "9 rue Paul Louis Lande",
		specialities: "Cuisine chinoise",
		hour: "Midi",
		price: "25€-50€",
		rating: "❤️❤️❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-premium/close-up-confit-canard-assiette-porcelaine-blanche-plat-traditionnel-francais-pattes-canard-cuites-lentement-garnies-feuilles-rogues-carte-visite-cuisine-francaise_124865-42395.jpg?w=826",
		name: "Arcada",
		adresse: "13 rue de la Rousselle",
		specialities: "Terroir français",
		hour: "Soir",
		price: "+50€",
		rating: "❤️❤️❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-premium/risotto-du-poivre-rouge-roti-ail-du-risotto-frais-photos1160jpg_995407-175251.jpg?w=826",
		name: "Simeone Dell'Arte",
		adresse: "10 place Camille Jullian",
		specialities: "Cuisine italienne",
		hour: "Midi",
		price: "25€-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "Cuisine italienne",
		hour: "Midi",
		price: "25€-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "Cuisine italienne",
		hour: "Midi",
		price: "25€-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "Cuisine italienne",
		hour: "Midi",
		price: "25€-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "Cuisine italienne",
		hour: "Midi",
		price: "25€-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "Cuisine italienne",
		hour: "Midi",
		price: "25€-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "Cuisine italienne",
		hour: "Midi",
		price: "25€-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "Cuisine italienne",
		hour: "Midi",
		price: "25€-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "Cuisine italienne",
		hour: "Midi",
		price: "25€-50€",
		rating: "❤️❤️",
	},
];

// fonction pour créer de nouvelles cartes avec les infos présentes dans le tableau newRestaurant
function createCard(restaurant) {
	const { picture, name, adresse, specialities, hour, price, rating } =
		restaurant;

	const cardRestaurant = document.createElement("article");
	cardRestaurant.classList.add("card-restaurant");
	cards.appendChild(cardRestaurant);

	const cardImg = document.createElement("img");
	cardImg.src = picture;
	cardImg.alt = name;
	cardImg.classList.add("picture-restaurant");
	cardRestaurant.appendChild(cardImg);

	const cardUl = document.createElement("ul");
	cardRestaurant.appendChild(cardUl);

	const cardName = document.createElement("li");
	cardName.classList.add("card-name");
	cardUl.appendChild(cardName);
	cardName.textContent = name;

	const cardAdress = document.createElement("li");
	cardAdress.classList.add("informations-restaurant");
	cardUl.appendChild(cardAdress);
	cardAdress.textContent = `Adresse : ${adresse}`;

	const cardSpecialities = document.createElement("li");
	cardSpecialities.classList.add("informations-restaurant");
	cardUl.appendChild(cardSpecialities);
	cardSpecialities.textContent = `Spécialité : ${specialities}`;

	const cardHour = document.createElement("li");
	cardHour.classList.add("informations-restaurant");
	cardUl.appendChild(cardHour);
	cardHour.textContent = `Heures d'ouverture : ${hour}`;

	const cardPrice = document.createElement("li");
	cardPrice.classList.add("informations-restaurant");
	cardUl.appendChild(cardPrice);
	cardPrice.textContent = `Fourchette de prix : ${price}`;

	const cardRating = document.createElement("li");
	cardRating.classList.add("informations-restaurant");
	cardUl.appendChild(cardRating);
	cardRating.textContent = `Note : ${rating}`;
}



const form = document.querySelector("#add-restaurant");

// fonction qui intégre un nouveau restaurant en dernière position dans le tableau des nouveaux restos
newRestaurant.forEach((restaurant) => createCard(restaurant));

let restaurantPlus;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(e)
    restaurantPlus = {
		picture: e.target[8].value,
		name: e.target[1].value,
		adresse: e.target[2].value,
		specialities: e.target[3].value,
		hour: e.target[5].value,
		price: e.target[4].value,
		rating: e.target[6].value,
		}

	newRestaurant.push(restaurantPlus);
	

	// on ajoute seulement la carte générée par le formulaire, donc la dernière du tableau
		createCard(newRestaurant.pop());
});



const formulaireFilter = document.querySelector("#filter-form");

formulaireFilter.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);

	if(event.target[1].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.specialities === event.target[1].value).map((r) => createCard(r)).slice(-1)
			if (event.target[1].value === restaurantPlus.specialities) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[2].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.specialities === event.target[2].value).map((r) => createCard(r)).slice(-1)
			if (event.target[2].value === restaurantPlus.specialities) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[3].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.specialities === event.target[3].value).map((r) => createCard(r)).slice(-1)
			if (event.target[3].value === restaurantPlus.specialities) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[4].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.specialities === event.target[4].value).map((r) => createCard(r)).slice(-1)
			if (event.target[4].value === restaurantPlus.specialities) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[5].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.specialities === event.target[5].value).map((r) => createCard(r)).slice(-1)
			if (event.target[5].value === restaurantPlus.specialities) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[6].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.rating === event.target[6].value).map((r) => createCard(r)).slice(-1)
			if (event.target[6].value === restaurantPlus.rating) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[7].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.rating === event.target[7].value).map((r) => createCard(r)).slice(-1)
			if (event.target[7].value === restaurantPlus.rating) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[8].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.rating === event.target[8].value).map((r) => createCard(r)).slice(-1)
			if (event.target[8].value === restaurantPlus.rating) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[9].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.rating === event.target[9].value).map((r) => createCard(r)).slice(-1)
			if (event.target[9].value === restaurantPlus.rating) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[10].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.hour === event.target[10].value).map((r) => createCard(r)).slice(-1)
			if (event.target[10].value === restaurantPlus.hour) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[11].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.hour === event.target[11].value).map((r) => createCard(r)).slice(-1)
			if (event.target[11].value === restaurantPlus.hour) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[12].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.price === event.target[12].value).map((r) => createCard(r)).slice(-1)
			if (event.target[12].value === restaurantPlus.price) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[13].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.price === event.target[13].value).map((r) => createCard(r)).slice(-1)
			if (event.target[13].value === restaurantPlus.price) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[14].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.filter((r) => r.price === event.target[14].value).map((r) => createCard(r)).slice(-1)
			if (event.target[14].value === restaurantPlus.price) {filterRestaurant.push(createCard(restaurantPlus))}
	}
	if(event.target[15].checked === true) {
		cards.innerHTML = "";
		let filterRestaurant = newRestaurant.forEach((restaurant) => createCard(restaurant))	
	}
})	

const btnHautdePage = document.querySelector(".btnHautdePage");
console.log(btnHautdePage);

btnHautdePage.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});