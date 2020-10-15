import gameProcees from '../index.js';
import { getRandom } from '../cli.js';

const description = 'Find the greatest common divisor of given numbers';

const findNODfunction = (str) => {
  const arr = str.split(' ');
  const a = Math.abs(Number(arr[0]));
  const b = Math.abs(Number(arr[1]));

  const nod = (x, y) => {
    if (y > x) return nod(y, x);
    if (!y) return x;
    return nod(y, x % y);
  };

  return String((nod(a, b)));
};

const numGenerator = () => getRandom(100);

const expression = () => `${numGenerator()} ${numGenerator()}`;

const brainGcdGame = () => gameProcees(description, expression, findNODfunction);

export default brainGcdGame;
