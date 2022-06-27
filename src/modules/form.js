import Data from './post.js';
import refresh from './refresh.js';
import getUser from './user.js';
import { user, score } from './variables.js';

const handleSubmit = (e) => {
  e.preventDefault();
  const userData = new Data();
  userData.add(getUser());
  refresh(user, score);
};

export default handleSubmit;