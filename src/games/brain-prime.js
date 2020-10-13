import gameProcees from './index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const numGenerator = () => Math.floor(Math.random() * 100) + 1;

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
