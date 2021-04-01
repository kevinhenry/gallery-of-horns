import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Gallery of Horns</h1>
        <h2 className = "headerh2">You may click on the button or the picture</h2>
      </header>
    );
  }
}

export default Header;
