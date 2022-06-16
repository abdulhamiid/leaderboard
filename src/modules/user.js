import { name, score } from "./variables";

const getUser = () => {
  // get user input from the form
  const userName = name.value;
  const userScore = score.value;

  // user input object
  const userInput = {
    user: userName,
    score: userScore
  }
  // console.log(userInput)
  return userInput;
}

const refresh = (prop1, prop2) => {
  prop1.value = '';
  prop2.value = '';
}


export default getUser;