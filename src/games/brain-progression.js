import gameProcees from '../index.js';
import { getRandom } from '../cli.js';

const description = 'What number is missing in the progression?';

const numGenerator1 = () => getRandom(30);
const numGenerator2 = () => getRandom(9);

const generateExpression = () => {
  const firstNum = numGenerator1();
  const progressionArray = [firstNum];
  const progressionStep = numGenerator1();
  for (let i = 0; progressionArray.length < 10; i += 1) {
    progressionArray.push(progressionArray[i] + progressionStep);
  }
  progressionArray[numGenerator2()] = '..';
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

const brainProgrGame = () => gameProcees(description, generateExpression, solution);

export default brainProgrGame;
