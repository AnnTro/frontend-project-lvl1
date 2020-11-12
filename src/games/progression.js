import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const firstNum = getRandom(1, 30);
  const progressionArray = [firstNum];
  const progressionStep = getRandom(1, 30);
  for (let i = 0; progressionArray.length < 10; i += 1) {
    progressionArray.push(progressionArray[i] + progressionStep);
  }
  return progressionArray;
};

const generateQuestionAndAnswer = () => {
  const progression = generateProgression();
  const placeOfHiddenNum = getRandom(1, 9);
  const answer = String(progression[placeOfHiddenNum]);
  progression[placeOfHiddenNum] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const brainProgrGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainProgrGame;
