import React from 'react';
import {Container, Row, Button} from 'reactstrap';


function App() {
  return (
    <Container className="App vh-100">
      <div className="row h-100">
        <div className="col-12 align-self-center">
          <div className="text-right">0</div>
          <Row className="pad">
            <Button color="danger" className="col-6">AC</Button>
            <Button color="info" className="col-3">/</Button>
            <Button color="info" className="col-3">*</Button>
            <Button color="primary" className="col-3 ">7</Button>
            <Button color="primary" className="col-3">8</Button>
            <Button color="primary" className="col-3">9</Button>
            <Button color="info" className="col-3">-</Button>
            <Button color="primary" className="col-3">4</Button>
            <Button color="primary" className="col-3">5</Button>
            <Button color="primary" className="col-3">6</Button>
            <Button color="info" className="col-3">+</Button>
            <div className="row w-75 m-0">
              <Button color="primary" className="col-4">1</Button>
              <Button color="primary" className="col-4">2</Button>
              <Button color="primary" className="col-4">3</Button>
              <Button color="primary" className="col-8">0</Button>
              <Button color="primary" className="col-4">.</Button>
            </div>
            <Button color="success" className="col-3">=</Button>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default App;
