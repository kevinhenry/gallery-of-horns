import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
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
      hornValue: {},
    }
  }

  showModal = (selectedBeast) => {
    // this.setState({ display: !this.state.display });
    this.setState({ display: true, selectedBeast: selectedBeast });
  }
  
  hideModal = () => {
    this.setState({ display: false, selectedBeast: {} });
  }

  filterBeast = (allBeast) => {
    if (allBeast === "all") {
      return this.setState({ hornValue: null })
      } else {
        this.setState({ hornValue: allBeast })
      }
    }

  // purgeBeast = () => {
  //   this.setState({ display: false });
  // }
  
  render () {
    return (
      <div>
        <Header />

        <Main
          data={this.state.data}
          filterBeast={this.filterbeast}
          hornValue={this.state.hornValue}
          handleClick={this.showModal}
        />  

        <SelectedBeast
          display={this.state.display}
          hideBeast={this.hideModal}
          selectedBeast={this.state.selectedBeast}
          // purgeBeast={this.purgeBeast}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
