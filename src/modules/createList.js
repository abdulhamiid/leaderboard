import { scorePlaceholder } from './variables.js';

const createList = (prop) => {
  scorePlaceholder.innerHTML += `
  <li>Name: ${prop}</li>`;
};

export default createList;