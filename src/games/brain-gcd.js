import gameProcees from '../index.js';
import getRandom from '../utils.js';

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

const numGenerator = () => getRandom(1, 100);

const expression = () => `${numGenerator()} ${numGenerator()}`;

const generateQandA = () => {
  const question = expression();
  const answer = findNODfunction(question);
  return [question, answer];
};

const brainGcdGame = () => gameProcees(generateQandA, description);

export default brainGcdGame;
