export class Data {

  add (prop) {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JUUg16quXPBEL9Inuyon/scores/', {
      method: 'POST',
      body: JSON.stringify(prop),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
}