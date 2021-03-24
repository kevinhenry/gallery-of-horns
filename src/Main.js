import React from 'react';
import HornedBeasts from './HornedBeasts';
import './Main.css';
// import hornedBeastsConstants from './constants/HornedBeastsConstants';


class Main extends React.Component {
  render() {

    return (
    <main>
      <HornedBeasts name='xyz' title='xyz' imgUrl="https://placehold.it/400x300/444" description='abc' />
      {/* <HornedBeasts name='xyz' title='xyz' imgUrl="https://placehold.it/400x300/444" description='abc' /> */}

      {/* <HornedBeasts name='xyz' title='TitleAnimal' imgUrl="https://hammer.ucla.edu/sites/default/files/styles/archive_artwork/public/migrated-assets/media/Digital_archives/Loss_and_Restitution/Artwork/1956.4.39.jpg?itok=g-uV4ycs" description='BeastOne' /> */}
      
      <HornedBeasts name='Beast Two' title='TitleAnimal' imgUrl="https://hammer.ucla.edu/sites/default/files/styles/archive_artwork/public/migrated-assets/media/Digital_archives/Loss_and_Restitution/Artwork/1956.4.39.jpg?itok=g-uV4ycs" description='BeastTwo' />

    </main>)
  }
}
  




    // let beasts = [];
    // hornedBeastsConstants.forEach(item => {
    //   beasts.push((<hornedBeastsConstants.forEach(item => {

    //   <div>  
//   }
// }

export default Main;