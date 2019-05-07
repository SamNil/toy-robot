import fs from 'fs';
import Robot from './models/robot';
import Board from './models/board';
import Position from './models/position';

const usage = () => {
    console.log('        Usage        ');
    console.log('node index <filename>');
    console.log('filename should contain the commands to run');
};

const main = () => {
    console.log('start');
    console.log(process.argv);
    if (process.argv.length !== 3) {
        usage();
        process.exit(0);
    }
    const filename = process.argv[2];
    const commands = fs.readFileSync(filename).toString().split('\n');
    const robot = new Robot(new Board(5, 5));
    for (const command of commands) {
        try {
            if (command === 'LEFT') robot.left();
            if (command === 'RIGHT') robot.right();
            if (command === 'MOVE') robot.move();
            if (command === 'REPORT') console.log(robot.report());
            if (command.startsWith('PLACE')) {
                const params = command.split(/ |,/);
                const x = parseInt(params[1]);
                const y = parseInt(params[2]);
                const direction = params[3];
                robot.place(new Position(x, y), direction);
            }
        } catch (err) { /* ignore */}
    }
};

main();
