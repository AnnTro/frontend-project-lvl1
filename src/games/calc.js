import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'What is the result of the expression?';

const expression = () => {
  const operators = ['+', '-', '*'];
  return `${getRandom(1, 100)} ${operators[getRandom(0, 2)]} ${getRandom(1, 100)}`;
};

const solution = (str) => {
  const arr = str.split(' ');
  switch (arr[1]) {
    case '-':
      return String(arr[0] - arr[2]);

    case '*':
      return String(arr[0] * arr[2]);

    default:
      return String(Number(arr[0]) + Number(arr[2]));
  }
};

const generateQuestionAndAnswer = () => {
  const question = expression();
  const answer = solution(question);
  return [question, answer];
};

const brainCalcGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainCalcGame;
