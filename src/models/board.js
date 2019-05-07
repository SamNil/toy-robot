export default class Board {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    isPositionValid(pos) {
        return pos.x >= 0 && pos.x <= this.x &&
                pos.y >= 0 && pos.y <= this.y;
    }
}