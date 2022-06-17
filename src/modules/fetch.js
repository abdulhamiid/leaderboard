import { baseUrl, scorePlaceholder } from "./variables";

const fetchData = () => {
  scorePlaceholder.innerHTML = '';
  fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      data.result.forEach(data => {
      scorePlaceholder.innerHTML += `
      <li>${data.user}: ${data.score}</li>`;
      });
  });
}

export default fetchData;