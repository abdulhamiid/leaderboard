import { baseUrl, scorePlaceholder, resultCount } from './variables.js';

const fetchData = () => {
  scorePlaceholder.innerHTML = '';
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      data.result.forEach((data) => {
        scorePlaceholder.innerHTML += `
      <li class="score" >${data.user}: ${data.score}</li>`;
        document.querySelectorAll('.score').forEach(li => {
          let R = Math.floor(Math.random() * 255);
          let G = Math.floor(Math.random() * 255);
          let B = Math.floor(Math.random() * 255);
          let bg = 'rgb'+ '(' + R + ', ' + G + ', ' + B + ')'
          li.style.backgroundColor = bg;
        })
      });
      resultCount.textContent = `(${data.result.length}) Players`
    });
};
fetchData()

export default fetchData;