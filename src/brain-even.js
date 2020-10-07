import gameProcees from './index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const numGenerator = () => Math.floor(Math.random() * 100) + 1;

const evenChecking = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEvenGame = () => gameProcees(description, numGenerator, evenChecking);

export default brainEvenGame;
