import './style.css';
import { search } from './modules/variables.js';
import handleSubmit from './modules/form.js';
import { form, refreshBtn } from './modules/variables.js';
import displayScore from './modules/async.js';
import filter from './modules/filter.js';

refreshBtn.addEventListener('click', displayScore);
form.addEventListener('submit', handleSubmit);
search.addEventListener('keyup', filter);