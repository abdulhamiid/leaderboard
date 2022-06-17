import './style.css';
import handleSubmit from './modules/form.js';
import { form, refreshBtn } from './modules/variables.js';
import displayScore from './modules/async.js';

refreshBtn.addEventListener('click', displayScore);
form.addEventListener('submit', handleSubmit);