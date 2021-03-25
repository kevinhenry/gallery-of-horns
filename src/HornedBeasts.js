import React from 'react';
import './HornedBeasts.css';

class HornedBeasts extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div>  
        <h2>{this.props.name}</h2>
        <img title={this.props.name} alt={this.props.name + " image"} src={this.props.imgUrl} ></img>
        {/* src="https://hammer.ucla.edu/sites/default/files/styles/archive_artwork/public/migrated-assets/media/Digital_archives/Loss_and_Restitution/Artwork/1956.4.39.jpg?itok=g-uV4ycs" alt="skulls with horns" title="March or Horned Beast"/>; */}
        {/* <p>Skulls and horns intwined</p> */}
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeasts;
