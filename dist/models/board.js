"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var Board = function () {
    function Board(x, y) {_classCallCheck(this, Board);
        this.x = x;
        this.y = y;
    }_createClass(Board, [{ key: "isPositionValid", value: function isPositionValid(
        pos) {
            return pos.x >= 0 && pos.x <= this.x &&
            pos.y >= 0 && pos.y <= this.y;
        } }]);return Board;}();exports.default = Board;
//# sourceMappingURL=board.js.map