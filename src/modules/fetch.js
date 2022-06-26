import { baseUrl, scorePlaceholder, resultCount } from './variables.js';
let names = [];

const fetchData = () => {
  scorePlaceholder.innerHTML = '';
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      data.result.forEach((data) => {
        scorePlaceholder.innerHTML += `
      <li class="score" >${data.user}: ${data.score}</li>`;
        document.querySelectorAll('.score').forEach((li) => {
          const R = Math.floor(Math.random() * 255);
          const G = Math.floor(Math.random() * 255);
          const B = Math.floor(Math.random() * 255);
          const bg = `rgb(${R}, ${G}, ${B})`;
          li.style.backgroundColor = bg;
        });
      });
      names = scorePlaceholder.querySelectorAll('li')
      resultCount.textContent = `(${data.result.length}) Players`;
    });
};
fetchData();

export { names, fetchData };