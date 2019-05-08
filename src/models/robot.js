import Direction from './direction';
import Position from './position';

export default class Robot {
    constructor(board) {
        this.board = board;
        this.position = null;
        this.direction = null;
    }
    isPlaced() {
        return this.position && this.direction;
    }
    report() {
        return `${this.position.x}, ${this.position.y}, ${this.direction}`;
    }
    move() {
        if (!this.isPlaced()) {
            throw new Error('Robot not placed');
        }
        let newX = this.position.x;
        let newY = this.position.y;
        if (this.direction === Direction.East) ++newX;
        if (this.direction === Direction.West) --newX;
        if (this.direction === Direction.North) ++newY;
        if (this.direction === Direction.South) --newY;
        const newPos = new Position(newX, newY);
        if (this.board.isPositionValid(newPos)) {
            this.position = newPos;
        } else {
            throw new Error('Invalid Position');
        }
    }
    left() {
        if (!this.isPlaced()) {
            throw new Error('Robot not placed');
        }
        if (this.direction === Direction.East) this.direction = Direction.North;
        else if (this.direction === Direction.West) this.direction = Direction.South;
        else if (this.direction === Direction.North) this.direction = Direction.East;
        else if (this.direction === Direction.South) this.direction = Direction.West;
    }
    right() {
        if (!this.isPlaced()) {
            throw new Error('Robot not placed');
        }
        if (this.direction === Direction.East) this.direction = Direction.South;
        else if (this.direction === Direction.West) this.direction = Direction.North;
        else if (this.direction === Direction.North) this.direction = Direction.West;
        else if (this.direction === Direction.South) this.direction = Direction.East;
    }
    place(pos, dir) {
        if (!this.board.isPositionValid(pos)) {
            throw new Error('Invalid Position');
        }
        this.position = pos;
        this.direction = Direction[dir.trim()];
    }
}