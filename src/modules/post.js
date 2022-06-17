import { baseUrl } from "./variables";

export class Data {

  add (prop) {
    fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(prop),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      // .then((json) => console.log(json))
  
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
}