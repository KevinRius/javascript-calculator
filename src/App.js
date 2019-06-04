import React, {Component} from 'react';
import {Container, Row, Button} from 'reactstrap';


class App extends Component {
  state = {
    equation: '0',
    result: 0
  };

  handleEquation = (e) => {
    let equation = this.state.equation;
    if (equation === '0') {
      equation = '';
    } 
    if (this.state.result == 'error') {
      this.setState({result: 0});
    } else if (this.state.result !== 0) {
      equation = this.state.result;
      this.setState({result: 0});
    }
    if (/\D$/.test(equation) && /\D$/.test(e.target.innerText)) {}
    else {
      equation = equation + (e.target.innerText);
      this.setState({equation})
    }
  }

  handleAC = () => {
    this.setState({
      equation: '0',
      result: 0
    })
  }

  handleEqual = () => {
    if (/\d$/.test(this.state.equation)) {
      let result = eval(this.state.equation);
      this.setState({result: result});
    } else {
      this.setState({result: 'error'});
    }
  }

  render() {
    return (
      <Container className="App vh-100">
        <div className="row h-100">
          <div className="calculator col-12 align-self-center bg-light">
            <div className="text-right">
              <h5>{this.state.equation}</h5>
              <h3>{this.state.result}</h3>
            </div>
            <Row className="pad">
              <Button onClick={this.handleAC} color="danger" className="col-6">AC</Button>
              <Button onClick={this.handleEquation} color="info" className="col-3">/</Button>
              <Button onClick={this.handleEquation} color="info" className="col-3">*</Button>
              <Button onClick={this.handleEquation} color="primary" className="col-3 ">7</Button>
              <Button onClick={this.handleEquation} color="primary" className="col-3">8</Button>
              <Button onClick={this.handleEquation} color="primary" className="col-3">9</Button>
              <Button onClick={this.handleEquation} color="info" className="col-3">-</Button>
              <Button onClick={this.handleEquation} color="primary" className="col-3">4</Button>
              <Button onClick={this.handleEquation} color="primary" className="col-3">5</Button>
              <Button onClick={this.handleEquation} color="primary" className="col-3">6</Button>
              <Button onClick={this.handleEquation} color="info" className="col-3">+</Button>
              <div className="row w-75 m-0">
                <Button onClick={this.handleEquation} color="primary" className="col-4">1</Button>
                <Button onClick={this.handleEquation} color="primary" className="col-4">2</Button>
                <Button onClick={this.handleEquation} color="primary" className="col-4">3</Button>
                <Button onClick={this.handleEquation} color="primary" className="col-8">0</Button>
                <Button onClick={this.handleEquation} color="primary" className="col-4">.</Button>
              </div>
              <Button onClick={this.handleEqual} color="success" className="col-3">=</Button>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
