import readlineSync from 'readline-sync';

const gameRounds = 3;

const gameProcees = (generateQandA, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  // description = описание игры;
  // questionFunction = функция, которая генерирует вопрос;
  // testFunction = функция, которая выдает правильное решение на вопрос questionFunction

  let round = 0;

  while (round < gameRounds) {
    const [currentQuestion, currentAnswer] = generateQandA();
    console.log(`Question: ${currentQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (currentAnswer === userAnswer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer :( Correct answer was '${currentAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  if (round === gameRounds) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameProcees;
