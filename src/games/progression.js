import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (step, progression) => {
  for (let i = 0; progression.length < 10; i += 1) {
    progression.push(progression[i] + step);
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const firstNum = getRandom(1, 30);
  const progressionArray = [firstNum];
  const progressionStep = getRandom(1, 30);
  const progression = generateProgression(progressionStep, progressionArray);

  const placeOfHiddenNum = getRandom(1, progression.length - 1);
  const answer = String(progression[placeOfHiddenNum]);
  progression[placeOfHiddenNum] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const brainProgrGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainProgrGame;
