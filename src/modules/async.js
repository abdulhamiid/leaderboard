import fetchData from "./fetch"
import { scorePlaceholder } from "./variables";

  async function displayScore() {
    scorePlaceholder.textContent = 'Loading...'
    // 1. Execution 
    const showScore = await fetchData();
  }

export default displayScore;