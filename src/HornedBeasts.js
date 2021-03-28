import React from 'react';
import Card from 'react-bootstrap/Card';
import { AiFillHeart } from 'react-icons/ai';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfClicks: 0,
    };
  }

  buttonClicked = () => {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
    this.props.updateBeast(this.props.title);
    this.props.showModal();
  }

  render () {
    return (
      <div>
        <Card style={{ width: '30rem' }}>
          <Card.Img onClick={this.buttonClicked} variant="top" src={this.props.image_url} style={{ width: '100%' }} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              <div><AiFillHeart />{this.state.numberOfClicks}</div>
            </Card.Text>
              This is my favorite Horned Beast!
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
