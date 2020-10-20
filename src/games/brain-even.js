import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const numGenerator = () => getRandom(1, 100);

const evenChecking = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEvenGame = () => gameProcees(description, numGenerator, evenChecking);

export default brainEvenGame;
