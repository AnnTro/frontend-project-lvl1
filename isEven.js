import readlineSync from 'readline-sync';

const randomNum = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const isEven = (num) => {
  if (num % 2 === 0) { return true; }
  else { return false; }
}

const evenGame = () => {
  const rightAnswer = 'Correct!';
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i++) {
    const currentNumber = randomNum();
    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isEven(currentNumber) && (userAnswer === 'yes')) {
      console.log(rightAnswer);
    } else if (!isEven(currentNumber) && (userAnswer === 'no')) {
      console.log(rightAnswer);
    } else {
      if (userAnswer === 'yes') {
        console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'no'`);
        console.log(`Let's try again!`)
        break;
      } else {
        console.log(`'${userAnswer}' is wrong answer :( Correct answer was 'yes'`);
        console.log(`Let's try again!`)
        break;
}
    }
    if (i === 3) {
      console.log('Congratilations!')
    }
  }
};

export default evenGame;