import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import data from './data.json';
import HornedBeasts from './HornedBeasts';

import './Main.css';

class Main extends React.Component {
  render() {
    let beastArray = data.map( animal => {
        return <HornedBeasts
          name = {animal.keyword}
          title = {animal.title}
          image_url = {animal.image_url}
          description = {animal.description}
        />
        
    });
  
    return (
      <main>
        <CardColumns>
          {beastArray}
        </CardColumns>
      </main>
    );

  }
}

export default Main;
