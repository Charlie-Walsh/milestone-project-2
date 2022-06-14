/**
 * @jest-environment jsdom
 */

const {game} = require("../js/game") 

beforeAll (() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Does the game object contain the corect keys", () => {
    test("does the cards key exist", () => {
        expect("cards" in game).toBe(true); 
    });
    test("Does the matches key exist", () => {
        expect("matches" in game).toBe(true);
    });
});