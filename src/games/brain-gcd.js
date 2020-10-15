import gameProcees from '../index.js';
import { getRandom } from '../cli.js';

const description = 'Find the greatest common divisor of given numbers';

const findNODfunction = (str) => {
  const arr = str.split(' ');
  let a = Math.abs(Number(arr[0]));
  let b = Math.abs(Number(arr[1]));

  if (b > a) { const temp = a; a = b; b = temp; }
  while (true) {
    if (b === 0) return a.toString();
    a %= b;
    if (a === 0) return b.toString();
    b %= a;
  }
};

const numGenerator = () => getRandom(100);

const expression = () => `${numGenerator()} ${numGenerator()}`;

const brainGcdGame = () => gameProcees(description, expression, findNODfunction);

export default brainGcdGame;
