import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const question = getRandom(1, 100);

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const answer = (isPrime(question)) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrimeGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainPrimeGame;
