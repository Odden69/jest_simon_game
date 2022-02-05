/**
 * @jest-environment jsdom
 */
const {
    game,
    newGame,
    showScore,
} = require('../game');

beforeAll(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf-8');
    document.open();
    document.write(fileContents);
    document.close();
})

describe('game object contains correct keys', () => {
    test('score key exist', () => {
        expect('score' in game).toBe(true);
    });
    test('currentGame key exist', () => {
        expect('currentGame' in game).toBe(true);
    });
    test('playerMoves key exist', () => {
        expect('playerMoves' in game).toBe(true);
    });
    test('choices key exist', () => {
        expect('choices' in game).toBe(true);
    });
    test('choices contains the correct ids', () => {
        expect(game.choices).toEqual(['button1', 'button2', 'button3', 'button4']);
    });
});

describe('newGame works correctly', () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ['button1', 'button2', 'button3', 'button4'];
        game.currentGame = ['button1', 'button2', 'button3', 'button4'];
        document.getElementById('score').innerText = '42';
        newGame();
    });
    test('should set the game score to zero', () => {
        expect(game.score).toEqual(0);
    });
    test('should empty playerMoves array', () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test('should empty currentGame array', () => {
        expect(game.currentGame.length).toEqual(0);
    });
    test('should display 0 for the element with id of score', () => {
        expect(document.getElementById('score').innerText).toEqual(0);
    });
})