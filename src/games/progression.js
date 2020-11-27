import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'What number is missing in the progression?';

const lengthOfProgression = 10;

const generateProgression = (step, first) => {
  const progression = [first];
  for (let i = 0; progression.length < lengthOfProgression; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const first = getRandom(1, 30);
  const step = getRandom(1, 30);
  const progression = generateProgression(step, first);

  const placeOfHiddenNum = getRandom(1, progression.length - 1);
  const answer = String(progression[placeOfHiddenNum]);
  progression[placeOfHiddenNum] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const brainProgrGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainProgrGame;
