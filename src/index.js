import './style.css';
import handleSubmit from './modules/form';
import { form, refreshBtn } from './modules/variables';
import displayScore from './modules/async';


refreshBtn.addEventListener('click', displayScore)
form.addEventListener('submit', handleSubmit);