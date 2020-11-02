import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'What number is missing in the progression?';

const generateExpression = () => {
  const firstNum = getRandom(1, 30);
  const progressionArray = [firstNum];
  const progressionStep = getRandom(1, 30);
  for (let i = 0; progressionArray.length < 10; i += 1) {
    progressionArray.push(progressionArray[i] + progressionStep);
  }
  progressionArray[getRandom(1, 9)] = '..';
  return progressionArray.join(' ');
};

const solution = (str) => {
  const arr = str.split(' ');
  for (let i = 0; i <= arr.length; i += 1) {
    let step;
    if (arr[i] === '..') {
      if (arr[i - 2]) {
        step = arr[i - 1] - arr[i - 2];
        arr[i] = Number(arr[i - 1]) + step;
        return String(arr[i]);
      }
      step = arr[i + 2] - arr[i + 1];
      arr[i] = arr[i + 1] - step;
      return String(arr[i]);
    }
  }
  return null;
};

const generateQuestionAndAnswer = () => {
  const question = generateExpression();
  const answer = solution(question);
  return [question, answer];
};

const brainProgrGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainProgrGame;
