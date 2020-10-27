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

const generateQandA = () => {
  const question = numGenerator();
  const answer = evenChecking(question);
  return [question, answer];
};

const brainEvenGame = () => gameProcees(generateQandA, description);

export default brainEvenGame;
