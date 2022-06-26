import './style.css';
import { search, form, refreshBtn } from './modules/variables.js';
import handleSubmit from './modules/form.js';
import displayScore from './modules/async.js';
import { filter } from './modules/fetch.js';

refreshBtn.addEventListener('click', displayScore);
form.addEventListener('submit', handleSubmit);
search.addEventListener('keyup', filter);