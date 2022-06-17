import { baseUrl } from './variables.js';

class Data {
  add(prop) {
    this.prop = prop;

    fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(this.prop),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json());
  }
}

export default Data;