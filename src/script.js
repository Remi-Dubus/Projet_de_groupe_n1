const cards = document.querySelector(".cards");
// Retirer la card restaurant mise en place dans le code html
cards.innerHTML = "";

// tableau qui recense toutes les informations de toutes les cartes restaurant
const newRestaurant = [
	{
		picture:
			"https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		name: "Dragon doré",
		adresse: "9 rue Paul Louis Lande",
		specialities: "Cuisine asiatique",
		hour: "Midi",
		price: "25-50€",
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
		specialities: "cuisine italienne",
		hour: "Midi",
		price: "25-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "cuisine italienne",
		hour: "Midi",
		price: "25-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "cuisine italienne",
		hour: "Midi",
		price: "25-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "cuisine italienne",
		hour: "Midi",
		price: "25-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "cuisine italienne",
		hour: "Midi",
		price: "25-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "cuisine italienne",
		hour: "Midi",
		price: "25-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "cuisine italienne",
		hour: "Midi",
		price: "25-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "cuisine italienne",
		hour: "Midi",
		price: "25-50€",
		rating: "❤️❤️",
	},
	{
		picture:
			"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
		name: "Amore",
		adresse: "11 place des Grands Hommes",
		specialities: "cuisine italienne",
		hour: "Midi",
		price: "25-50€",
		rating: "❤️❤️",
	},
];

// fonction qui intégre un nouveau restaurant en dernière position dans le tableau des nouveaux restos
// il faut paramétrer pour récuperer les données du formulaire
const newForm = newRestaurant.push({
	picture:
		"https://img.freepik.com/photos-gratuite/pizza-melangee-tomates-champignons_140725-1818.jpg?t=st=1728988727~exp=1728992327~hmac=39b0cd2ed26b4677895ace6e53ab8902b960fd9ced800e5f798a1502039fbedf&w=740",
	name: "Sakura San",
	adresse: "Bordeaux",
	specialities: "cuisine italienne",
	hour: "midi",
	price: "25-50€",
	rating: "❤️❤️❤️",
});

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

// on crée une boucle pour créer autant de cartes qu'il y a de restos dans le tableau
newRestaurant.forEach((restaurant) => createCard(restaurant));


/* les filtres */

