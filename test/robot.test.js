import Robot from '../src/models/robot';
import Board from '../src/models/board';
import Position from '../src/models/position';

describe('robot', () => {
    let robot;
    beforeEach(() => {
        robot = new Robot(new Board(5, 5));
    });
    it('should ignore a move command if the robot is not placed', () => {
        expect(() => robot.move()).toThrowError();
    });
    it('should ignore a turn command if the robot is not placed', () => {
        expect(() => robot.left()).toThrowError();
        expect(() => robot.right()).toThrowError();
    });
    it('should ignore a report command if the robot is not placed', () => {
        expect(() => robot.report()).toThrowError();
    });
    it('should accept a place command to initialize its position', () => {
        robot.place(new Position(0, 0), 'West');
        expect(robot.report()).toBe('0, 0, West');
    });
    it('should accept a move command if the robot is placed', () => {
        robot.place(new Position(0, 0), 'East');
        robot.move();
        expect(robot.report()).toBe('1, 0, East');
    });
    it('should accept a turn left command if the robot is placed', () => {
        robot.place(new Position(0, 0), 'East');
        robot.left();
        expect(robot.report()).toBe('0, 0, North');
    });
    it('should accept a turn right command if the robot is placed', () => {
        robot.place(new Position(0, 0), 'East');
        robot.right();
        expect(robot.report()).toBe('0, 0, South');
    });
    it('should accept a report command if the robot is placed', () => {
        robot.place(new Position(0, 0), 'East');
        expect(robot.report()).toBeTruthy();
    });
    it('should ignore a move command if the robot will move out of the board', () => {
        robot.place(new Position(0, 0), 'West');
        expect(() => robot.move()).toThrowError();
    });
    it('should ignore a place command if the robot is placed out of the board', () => {
        expect(() => robot.place(new Position(6, 6), 'West')).toThrowError();
    });
});