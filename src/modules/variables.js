const scorePlaceholder = document.querySelector('#scores');
const form = document.querySelector('#form');
const name = document.querySelector('input[type="text"]');
const score = document.querySelector('input[type="number"]');
const refreshBtn = document.querySelector('#refresh');
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JUUg16quXPBEL9Inuyon/scores/';

export {
  scorePlaceholder, form, name, score, refreshBtn, baseUrl,
};