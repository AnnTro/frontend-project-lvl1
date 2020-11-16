import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'Find the greatest common divisor of given numbers';

const gcd = (x, y) => (!y ? x : gcd(y, x % y));

const generateQuestionAndAnswer = () => {
  const firstNum = getRandom(1, 100);
  const secondNum = getRandom(1, 100);

  const question = `${firstNum} ${secondNum}`;
  const answer = String(gcd(firstNum, secondNum));

  return [question, answer];
};

const brainGcdGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainGcdGame;
