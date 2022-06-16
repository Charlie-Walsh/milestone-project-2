/**
 * @jest-environment jsdom
 */

const {game, newGame, randomise} = require("../js/game") 

beforeAll (() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

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

