import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const question = getRandom(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const brainEvenGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainEvenGame;
