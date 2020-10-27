import readlineSync from 'readline-sync';

const gameProcees = (generateQandA, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);
  const rightAnswer = 'Correct!';
  const gameRounds = 3;

  // description = описание игры;
  // questionFunction = функция, которая генерирует вопрос;
  // testFunction = функция, которая выдает правильное решение на вопрос questionFunction

  for (let roundCounter = 1; roundCounter <= gameRounds; roundCounter += 1) {
    const [currentQuestion, currentAnswer] = generateQandA();
    console.log(`Question: ${currentQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (currentAnswer === userAnswer) {
      console.log(rightAnswer);
    } else {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was '${currentAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (roundCounter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameProcees;
