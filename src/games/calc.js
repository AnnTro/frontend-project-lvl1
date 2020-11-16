import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'What is the result of the expression?';

const calc = (fNum, op, sNum) => {
  switch (op) {
    case '-':
      return fNum - sNum;
    case '+':
      return fNum + sNum;
    default:
      return fNum * sNum;
  }
};

const generateQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const firstNum = getRandom(1, 100);
  const secondNum = getRandom(1, 100);
  const operator = operators[getRandom(0, operators.length - 1)];
  const question = `${Number(firstNum)} ${operator} ${Number(secondNum)}`;
  const answer = String(calc(firstNum, operator, secondNum));

  return [question, answer];
};

const brainCalcGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainCalcGame;
