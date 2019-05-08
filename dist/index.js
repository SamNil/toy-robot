'use strict';var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);
var _robot = require('./models/robot');var _robot2 = _interopRequireDefault(_robot);
var _board = require('./models/board');var _board2 = _interopRequireDefault(_board);
var _position = require('./models/position');var _position2 = _interopRequireDefault(_position);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var usage = function usage() {
    console.log('        Usage        ');
    console.log('node index <filename>');
    console.log('filename should contain the commands to run');
};

var main = function main() {
    console.log('start');
    console.log(process.argv);
    if (process.argv.length !== 3) {
        usage();
        process.exit(0);
    }
    var filename = process.argv[2];
    var commands = _fs2.default.readFileSync(filename).toString().split('\n');
    var robot = new _robot2.default(new _board2.default(5, 5));var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
        for (var _iterator = commands[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var command = _step.value;
            try {
                if (command === 'LEFT') robot.left();
                if (command === 'RIGHT') robot.right();
                if (command === 'MOVE') robot.move();
                if (command === 'REPORT') console.log(robot.report());
                if (command.startsWith('PLACE')) {
                    var params = command.split(/ |,/);
                    var x = parseInt(params[1]);
                    var y = parseInt(params[2]);
                    var direction = params[3];
                    robot.place(new _position2.default(x, y), direction);
                }
            } catch (err) {/* ignore */}
        }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
};

main();
//# sourceMappingURL=index.js.map