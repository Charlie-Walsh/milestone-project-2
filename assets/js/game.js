//Varaibles
const game = {
    cards: [
        {
            name: 'bird',
            image: '../images/bird.min.jpg'

        },
        {
            name: 'bird',
            image: '../images/bird.min.jpg'

        },
        {
            name: 'dog',
            image: '../images/dog-min.jpg'
        },
        {
            name: 'dog',
            image: '../images/dog-min.jpg'
        },
        {
            name: 'cat',
            image: '../images/cat-min.jpg'
        },
        {
            name: 'cat',
            image: '../images/cat-min.jpg'
        }
        ],
    matches: 0,
    level: 1,
}

const gameArea = document.getElementById("game-box");
const cardData = game.cards;

// Starting the game 
function newGame() {
    game.matches = 0
    game.level = 1
}

module.exports = {game, newGame};