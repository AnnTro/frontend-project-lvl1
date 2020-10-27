import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const numGenerator = () => getRandom(1, 100);

const expression = () => numGenerator();

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateQandA = () => {
  const question = expression();
  const answer = isPrime(question);
  return [question, answer];
};

const brainPrimeGame = () => gameProcees(generateQandA, description);

export default brainPrimeGame;
