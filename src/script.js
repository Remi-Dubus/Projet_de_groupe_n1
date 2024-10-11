
const cards = document.querySelector(".cards");

const newRestaurant = [
    {
        picture: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
        name: "Sakura San",
        adresse: "Bordeaux",
        specialities: "cuisine chinoise",
        hour: "midi",
        price: "25-50€",
        rating: "❤️❤️❤️",
    },
    {
        picture: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
        name: "Sakura San",
        adresse: "Bordeaux",
        specialities: "cuisine chinoise",
        hour: "midi",
        price: "25-50€",
        rating: "❤️❤️❤️",
    },
    {
        picture: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Sakura San",
        adresse: "Bordeaux",
        specialities: "cuisine chinoise",
        hour: "midi",
        price: "25-50€",
        rating: "❤️❤️❤️",
    },
    {
        picture: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
        name: "Sakura San",
        adresse: "Bordeaux",
        specialities: "cuisine chinoise",
        hour: "midi",
        price: "25-50€",
        rating: "❤️❤️❤️",
    }
];

function createCard(restaurant){
    const { picture, name, adresse, specialities, hour, price, rating } = restaurant;

    const card = document.createElement("card-restaurant");
    card.classList.add("card-restaurant");
    cards.appendChild(card);

    const cardImg = document.createElement("img");
    cardImg.src = picture;
    cardImg.alt = name;
    cardImg.classList.add("picture-restaurant");
    card.appendChild(cardImg);

    const cardAdress = document.querySelector("card-adress");
    card.("card-adress");
    cards.appendChild(card);

}

newRestaurant.forEach((restaurant) => createCard(restaurant));

