import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import data from './data.json';
import Form from 'react-bootstrap/Form';

// const oneHorn = data.filter(beast => beast.horn === 1);
// const twoHorn = data.filter(beast => beast.horn === 2);
// const hundredHorn = data.filter(beast => beast.horn === 100);

class CounterHorn extends React.Component {

  handleForm = event => {
    if (event.target.value === "All") {
      return this.props.filterBeast("all");
    } else {
      const hornValue = +event.target.value;
      const hornArr = this.props.allBeast.filter(beast => beast.horns === hornValue);
      this.props.filterBeast(hornArr);
    }
  }

  render () {
    return (
      <>
        <Container>
          <Form>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>How Horny?</Form.Label>
              <Form.Control as="select" onChange={this.handleForm}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>100</option>
              </Form.Control>
            </Form.Group>
        
          </Form>
        </Container>
      </>
    );
  }
}

export default CounterHorn;
