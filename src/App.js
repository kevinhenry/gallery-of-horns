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
    };
  }

  showModal = () => {
    this.setState({ display: !this.state.display });
  }
  
  updateBeast = (name) => {
    const beastProfile = data.find(x => x.title === name);
    this.setState({ selectedBeast: beastProfile });
  }
  
  render () {
    return (
      <div>
        <Header />
        <Main
          data={this.state.data}
          showModal={this.showModal}
          updateBeast={this.updateBeast}
        />  
        <SelectedBeast
          display={this.state.display}
          showModal={this.showModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
