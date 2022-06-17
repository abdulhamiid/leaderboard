import Data from './post.js';
import refresh from './refresh.js';
import getUser from './user.js';
import { name, score } from './variables.js';

const handleSubmit = (e) => {
  e.preventDefault();
  const userData = new Data();
  userData.add(getUser());
  refresh(name, score);
};

export default handleSubmit;