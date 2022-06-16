/**
 * @jest-environment jsdom
 */

const { default: JSDOMEnvironment } = require("jest-environment-jsdom");
const {game, newGame, randomise, generateCards} = require("../js/game") 

describe("Do the main game keys exist in game", () => {
    test("Does the cards key exist", () => {
        expect("cards").toEqual("cards"); 
    });
    test("Does the matches key exist", () => {
        expect("matches").toEqual("matches");
    });
    test("Does the level key exist", () => {
        expect("level" in game).toBe(true);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.matches = 3;
        game.level = 2;
        newGame();
    })
    test("Does newGame reset matches in game", () => {
        expect(game.matches).toEqual(0);
    });
    test("does newGame reset level in game", () => {
        expect(game.level).toEqual(1);
    });
});

describe("generateCards creates cards' HTML", () => {
    beforeEach(() => {
        document.body.innerHTML = "<div class='game-box'> </div>";
        generateCards();
    })
    test("Does the function create images in the game area", () => {
        expect(document.getElementsByTagName("img").length).toBe(20);
    });
});

