import gameProcees from '../index.js';
import getRandom from '../utils.js';

const description = 'What is the result of the expression?';

const calc = (number1, operator, number2) => {
  switch (operator) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    default:
      return number1 * number2;
  }
};

const generateQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const firstNum = getRandom(1, 100);
  const secondNum = getRandom(1, 100);
  const randomIndexOperator = getRandom(0, operators.length - 1);
  const operator = operators[randomIndexOperator];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const answer = String(calc(firstNum, operator, secondNum));

  return [question, answer];
};

const brainCalcGame = () => gameProcees(generateQuestionAndAnswer, description);

export default brainCalcGame;
