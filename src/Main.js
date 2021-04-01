import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
// import data from './data.json';
import FormComponent from './CounterHorn';
import HornedBeasts from './HornedBeasts';

import './Main.css';

class Main extends React.Component {
  render () {
    // let hornArray = this.props.horn.map((beast, index) => (
    //   <HornedBeasts
    //     name = {beast.keyword}
    //     title = {beast.title}
    //     image_url = {beast.image_url}
    //     description = {beast.description}
    //     key = {index}
    //     handleClick={this.props.handleClick}
    //   />
      
    // ));
  
    let beastArray = this.props.data.map((beast, index) => (
      <HornedBeasts
        name = {beast.keyword}
        title = {beast.title}
        image_url = {beast.image_url}
        description = {beast.description}
        key = {index}
        // showModal={this.props.showModal}
        // updateBeast={this.props.updateBeast}
        handleClick={this.props.handleClick}
      />
      
    ));

    return (
      <main>
      
        <FormComponent>
          {/* {hornArray} */}
          filterBeast={this.props.filterBeast}
          allBeast={this.props.allBeast}
        </FormComponent>

        <CardColumns>
          {beastArray}
        </CardColumns>
      </main>
    );
  }
}

export default Main;
