import logo from './logo.svg';
import './App.css';
import { Base64, encode, decode, atob } from 'js-base64';
import mystery from './MysteryFlower.jpg'
import { Component } from 'react'
import poop from './poop'
class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount = () => {
    console.log(encode(mystery, true))
    const data = {
      api_key: '36vm8PoyoIS2nGMW9HCYi96iBeUGfhVs9xenBWlVXyGGLmOWu5',
      images: [poop],
      plant_language: 'en',
          plant_details: ['common_names',
                          'url',
                          'name_authority',
                          'wiki_description',
                          'taxonomy',
                          'synonyms'],
    }
    fetch('https://api.plant.id/v2/identify', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
          "Api-Key": '36vm8PoyoIS2nGMW9HCYi96iBeUGfhVs9xenBWlVXyGGLmOWu5',
       },
       body: JSON.stringify(data),
     })
     .then(response => response.json())
     .then(result => {
       console.log('Success:', result);
     })
     .catch((error) => {
       console.error('Error:', error);
     });
  }
  render() {
  return (
  <div></div>
  );
}
}

export default App;
