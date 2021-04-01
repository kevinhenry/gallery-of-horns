import React from 'react';
import Button from 'react-bootstrap/Button';
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
    // this.props.updateBeast(this.props.title);
    // this.props.showModal();
    this.props.handleClick({
      title: this.props.title,
      description: this.props.description,
      image_url: this.props.image_url,
    })
  }

  render () {
    return (
      <div>
        <Card style={{ width: '25rem' }}>
          <Card.Img onClick={this.buttonClicked} variant="top" src={this.props.image_url} style={{ width: '100%' }} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              <div><AiFillHeart />{this.state.numberOfClicks}</div>
            </Card.Text>
            <Button onClick={this.buttonClicked} variant="secondary" size="lg block">
              This is my favorite Horned Beast!
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
