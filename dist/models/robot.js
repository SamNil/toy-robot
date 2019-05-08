'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _direction = require('./direction');var _direction2 = _interopRequireDefault(_direction);
var _position = require('./position');var _position2 = _interopRequireDefault(_position);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var

Robot = function () {
    function Robot(board) {_classCallCheck(this, Robot);
        this.board = board;
        this.position = null;
        this.direction = null;
    }_createClass(Robot, [{ key: 'isPlaced', value: function isPlaced()
        {
            return this.position && this.direction;
        } }, { key: 'report', value: function report()
        {
            return this.position.x + ', ' + this.position.y + ', ' + this.direction;
        } }, { key: 'move', value: function move()
        {
            if (!this.isPlaced()) {
                throw new Error('Robot not placed');
            }
            var newX = this.position.x;
            var newY = this.position.y;
            if (this.direction === _direction2.default.East) ++newX;
            if (this.direction === _direction2.default.West) --newX;
            if (this.direction === _direction2.default.North) ++newY;
            if (this.direction === _direction2.default.South) --newY;
            var newPos = new _position2.default(newX, newY);
            if (this.board.isPositionValid(newPos)) {
                this.position = newPos;
            } else {
                throw new Error('Invalid Position');
            }
        } }, { key: 'left', value: function left()
        {
            if (!this.isPlaced()) {
                throw new Error('Robot not placed');
            }
            if (this.direction === _direction2.default.East) this.direction = _direction2.default.North;else
            if (this.direction === _direction2.default.West) this.direction = _direction2.default.South;else
            if (this.direction === _direction2.default.North) this.direction = _direction2.default.East;else
            if (this.direction === _direction2.default.South) this.direction = _direction2.default.West;
        } }, { key: 'right', value: function right()
        {
            if (!this.isPlaced()) {
                throw new Error('Robot not placed');
            }
            if (this.direction === _direction2.default.East) this.direction = _direction2.default.South;else
            if (this.direction === _direction2.default.West) this.direction = _direction2.default.North;else
            if (this.direction === _direction2.default.North) this.direction = _direction2.default.West;else
            if (this.direction === _direction2.default.South) this.direction = _direction2.default.East;
        } }, { key: 'place', value: function place(
        pos, dir) {
            if (!this.board.isPositionValid(pos)) {
                throw new Error('Invalid Position');
            }
            this.position = pos;
            this.direction = _direction2.default[dir.trim()];
        } }]);return Robot;}();exports.default = Robot;
//# sourceMappingURL=robot.js.map