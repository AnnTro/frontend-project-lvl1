import gameProcees from '../index.js';
import { getRandom } from '../cli.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const numGenerator = () => getRandom(100);

const expression = () => `${numGenerator()} ${operators[Math.floor(Math.random() * operators.length)]} ${numGenerator()}`;

const solution = (str) => {
  const arr = str.split(' ');
  switch (arr[1]) {
    case '-':
      return String(arr[0] - arr[2]);

    case '*':
      return String(arr[0] * arr[2]);

    default:
      return String(Number(arr[0]) + Number(arr[2]));
  }
};

const brainCalcGame = () => gameProcees(description, expression, solution);

export default brainCalcGame;
