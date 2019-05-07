import Board from '../src/models/board';
import Position from '../src/models/position';

describe('board', () => {
    let board;
    beforeEach(() => {
        board = new Board(5, 5);
    });
    it('should return true if a position is valid', () => {
        expect(board.isPositionValid(new Position(3, 4))).toBe(true);
    });
    it('should return false if a position is invalid', () => {
        expect(board.isPositionValid(new Position(6, 6))).toBe(false);
    });
});