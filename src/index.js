import './style.css';
import handleSubmit from './modules/form';
import renderUi from './modules/add.js';
import { form } from './modules/variables';

renderUi();

form.addEventListener('submit', handleSubmit);