import gameProcees from './index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const numGenerator2 = () => Math.floor(Math.random() * 100) + 1;

const expression = () => `${numGenerator2()} ${operators[Math.floor(Math.random() * operators.length)]} ${numGenerator2()}`;

const solution = (str) => eval(str).toString();

const brainCalcGame = () => gameProcees(description, expression, solution);

export default brainCalcGame;
