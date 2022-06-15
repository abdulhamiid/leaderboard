import createList from './createList.js';

const scores = [100, 20, 50, 78, 125, 77, 42];

const renderUi = () => {
  scores.forEach((score) => {
    createList(score);
  });
};

export default renderUi;