
import './App.css';
import React from 'react';

import Footer from '.Footer.js';
import Header from './Header/js';
import HornedBeast from './HornedBeasts';
import Main from './Main.js';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main>
          <HornedBeast />
          <HornedBeast />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
