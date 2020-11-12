import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'Find the greatest common divisor of given numbers';

const generateQuestionAndAnswer = () => {
  const firstNum = getRandom(1, 100);
  const secondNum = getRandom(1, 100);

  const question = `${firstNum} ${secondNum}`;

  const nod = (x, y) => {
    if (y > x) return nod(y, x);
    if (!y) return x;
    return String(nod(y, x % y));
  };

  return [question, nod(firstNum, secondNum)];
};

const brainGcdGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainGcdGame;
