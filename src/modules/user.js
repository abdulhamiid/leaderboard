import { name, score } from './variables.js';

const getUser = () => {
  // get user input from the form
  const userName = name.value;
  const userScore = score.value;

  // user input object
  const userInput = {
    user: userName,
    score: userScore,
  };
  // console.log(userInput)
  return userInput;
};

export default getUser;