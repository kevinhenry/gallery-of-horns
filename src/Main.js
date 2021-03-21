import React from 'react';
import HornedBeast from './HornedBeasts.js';


class Main extends React.Component {
  render() {
    return(
      <div>  
        <HornedBeasts title={'TitleAnimal'} imageURL={'https://hammer.ucla.edu/sites/default/files/styles/archive_artwork/public/migrated-assets/media/Digital_archives/Loss_and_Restitution/Artwork/1956.4.39.jpg?itok=g-uV4ycs'} description={'BeastOne'} />
        <HornedBeasts title={'TitleAnimal'} imageURL={'https://hammer.ucla.edu/sites/default/files/styles/archive_artwork/public/migrated-assets/media/Digital_archives/Loss_and_Restitution/Artwork/1956.4.39.jpg?itok=g-uV4ycs'} description={'BeastTwo'} />
      </div>
    );
  }
}

export default Main;