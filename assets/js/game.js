//Varaibles
const gameArea = document.querySelector(".game-box");
const game = {cards: [
        {name: 'bird', image: '../assets/images/bird-min.jpg'},
        {name: 'dog', image: '../assets/images/dog-min.png'},
        {name: 'cat', image: '../assets/images/cat-min.jpg'},
        {name: 'bird', image: '../assets/images/bird-min.jpg'},
        {name: 'dog', image: '../assets/images/dog-min.png'},
        {name: 'cat', image: '../assets/images/cat-min.jpg'},
    ],
    matches: 0,
    level: 1,
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
    cardData.forEach(item => {
        const card = document.createElement("div");
        const back = document.createElement("img");
        const face = document.createElement("img");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        face.src = item.image;
        gameArea.appendChild(card);
        card.appendChild(back);
        card.appendChild(face);
    });
};

generateCards();

module.exports = {game, newGame, randomise};