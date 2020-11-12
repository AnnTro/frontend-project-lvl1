import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const firstNum = getRandom(1, 100);
  const secondNum = getRandom(1, 100);
  const operator = operators[getRandom(0, operators.length - 1)];
  const question = `${Number(firstNum)} ${operator} ${Number(secondNum)}`;

  const answer = (fNum, op, sNum) => {
    switch (op) {
      case '-':
        return String(fNum - sNum);
      case '+':
        return String(fNum + sNum);
      default:
        return String(fNum * sNum);
    }
  };

  return [question, answer(firstNum, operator, secondNum)];
};

const brainCalcGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainCalcGame;
