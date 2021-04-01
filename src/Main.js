import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
// import data from './data.json';
import HornedBeasts from './HornedBeasts';

import './Main.css';

class Main extends React.Component {
  render () {
    let beastArray = this.props.data.map((beast, index) => (
      <HornedBeasts
        name = {beast.keyword}
        title = {beast.title}
        image_url = {beast.image_url}
        description = {beast.description}
        key = {index}
        // showModal={this.props.showModal}
        updateBeast={this.props.updateBeast}
        handleClick={this.props.handleClick}
      />
      
    ));
  
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
