import readlineSync from 'readline-sync';

const gameProcees = (description, questionFunction, testFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);
  const rightAnswer = 'Correct!';

  // description = описание игры;
  // questionFunction = функция, которая генерирует вопрос;
  // testFunction = функция, которая выдает правильное решение на вопрос questionFunction

  for (let roundCounter = 1; roundCounter <= 3; roundCounter += 1) {
    const currentQuestion = questionFunction();
    console.log(`Question: ${currentQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (testFunction(currentQuestion) === userAnswer) {
      console.log(rightAnswer);
    } else {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was '${testFunction(currentQuestion)}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (roundCounter === 3) {
      console.log(`Congratilations, ${userName}!`);
    }
  }
};

export default gameProcees;
