//Varaibles
const gameArea = document.querySelector(".game-box");
const game = {cards: [
        {name: 'bird', image: '../assets/images/bird-min.png'},
        {name: 'dog', image: '../assets/images/dog-min.png'},
        {name: 'cat', image: '../assets/images/cat-min.png'},
        {name: 'horse', image: '../assets/images/horse-min.png'},
        {name: 'mouse', image: '../assets/images/mouse-min.png'},
        {name: 'cow', image: '../assets/images/cow-min.png'},
        {name: 'duck', image: '../assets/images/duck-min.png'},
        {name: 'elephant', image: '../assets/images/elephant-min.png'},
        {name: 'sheep', image: '../assets/images/sheep-min.png'},
        {name: 'squirrel', image: '../assets/images/squirrel-min.png'},
        {name: 'bird', image: '../assets/images/bird-min.png'},
        {name: 'dog', image: '../assets/images/dog-min.png'},
        {name: 'cat', image: '../assets/images/cat-min.png'},
        {name: 'horse', image: '../assets/images/horse-min.png'},
        {name: 'mouse', image: '../assets/images/mouse-min.png'},
        {name: 'cow', image: '../assets/images/cow-min.png'},
        {name: 'duck', image: '../assets/images/duck-min.png'},
        {name: 'elephant', image: '../assets/images/elephant-min.png'},
        {name: 'sheep', image: '../assets/images/sheep-min.png'},
        {name: 'squirrel', image: '../assets/images/squirrel-min.png'},

    ],
    pairsFound: 0,
    back: {name: 'back', image: '../assets/images/card-back.png'},
};

// Starting the game 
function newGame() {
    game.matches = 0
    game.level = 1
};

//Randomise
function randomise() {
    const cardData = game.cards;
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

//Generate card HTML 
function generateCards() {

    const cardData = randomise();
    for (i = 0; i < cardData.length; i++) {
        const card = document.createElement("img");
        card.classList = "card";
        card.setAttribute('data-id', i);
        card.src = game.back.image;
        gameArea.appendChild(card);
    };
};
generateCards();
module.exports = {game, newGame, randomise, generateCards};