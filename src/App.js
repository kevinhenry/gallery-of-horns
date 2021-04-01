import React from 'react';
import data from './data.json';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: false,
      data: data,
      selectedBeast: {},
    }
  }

  showModal = (selectedBeast) => {
    // this.setState({ display: !this.state.display });
    this.setState({ display: true, selectedBeast: selectedBeast });
  }
  
  hideModal = () => {
    this.setState({ display: false, selectedBeast: {} });
  }

  // updateBeast = (name) => {
  //   const beastProfile = data.find(beast => beast.title === name);
  //   this.setState({ selectedBeast: beastProfile });
  // }
  
  render () {
    return (
      <div>
        <Header />
        <Main
          data={this.state.data}
          // showModal={this.showModal}
          // updateBeast={this.updateBeast}
          handleClick={this.showModal}
        />  
        <SelectedBeast
          display={this.state.display}
          hideBeast={this.hideModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
