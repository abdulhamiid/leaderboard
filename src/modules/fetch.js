import {
  baseUrl, scorePlaceholder, resultCount, search,
} from './variables.js';

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
          const G = Math.floor(Math.random() * 244);
          const B = Math.floor(Math.random() * 100);
          const bg = `rgb(${R}, ${G}, ${B})`;
          li.style.backgroundColor = bg;
        });
      });
      names = scorePlaceholder.querySelectorAll('li');
      resultCount.textContent = `(${data.result.length}) Players`;
    });
};

const filter = () => {
  const filterValue = search.value.toUpperCase();
  for (let i = 0; i < names.length; i += 1) {
    if (names[i].innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      names[i].style.display = '';
    } else {
      names[i].style.display = 'none';
    }
  }
};

fetchData();

export { fetchData, filter };