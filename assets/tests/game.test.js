/**
 * @jest-environment jsdom
 */

 const {game, gameArea, newGame, randomise, generateCards} = require("../js/game");

beforeEach(() => {
    const fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Do the main game keys exist in game", () => {
    test("Does the cards key exist", () => {
        expect("cards"in game).toBe(true); 
    });
    test("Does the pairsFound key exist", () => {
        expect("pairsFound" in game).toBe(true);
    });
});

describe("newGame works correctly", () => {
    beforeEach(() => { 
        game.pairsFound = 3;
        newGame();
    })
    test("Does newGame reset pairsFound in game", () => {
        expect(game.pairsFound).toEqual(0);
    });
});

describe("generateCards creates cards' HTML", () => {
    beforeEach(() => {
        document.body.innerHTML = "<div class='game-box'></div>";
        generateCards();
    })
    test("Does the function create images in the game area", () => {
        expect(document.getElementsByTagName("img").length).toBe(20);
    });
});

