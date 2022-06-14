let scores = [100, 20, 50, 78, 125, 77, 42];
import createList from "./createList";

const renderUi = () => {
  scores.forEach(score => {
    createList(score);
    console.log(1)
  })
}

export default renderUi;