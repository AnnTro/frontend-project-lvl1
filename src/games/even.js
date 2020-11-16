import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateQuestionAndAnswer = () => {
  const question = getRandom(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainEvenGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainEvenGame;
