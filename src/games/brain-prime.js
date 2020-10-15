import gameProcees from '../index.js';
import { getRandom } from '../cli.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const numGenerator = () => getRandom(100);

const expression = () => numGenerator();

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrimeGame = () => gameProcees(description, expression, isPrime);

export default brainPrimeGame;
