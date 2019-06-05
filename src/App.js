import React, {Component} from 'react';
import {Container, Row, Button} from 'reactstrap';


class App extends Component {
  state = {
    equation: '0',
    display: '0'
  };

  handleEquation = (e) => {
    let equation = this.state.equation;
    let display = this.state.display;

    
    display = display + e.target.innerText;
   //double operator management

    if (/\D/.test(e.target.innerText) && e.target.innerText !== '.') {   //display operator management
      display = e.target.innerText;
    } else if (/^\D/.test(display)) {
      equation += display;
      display = e.target.innerText;
    } else {equation += e.target.innerText;}

    if (this.state.display.indexOf('.') !== -1 && e.target.innerText === '.') {} else {  //dot management

      if (/^0/.test(display)) {                                                                 //can't begin by 0
        this.setState({equation: e.target.innerText, display: e.target.innerText})
      } else {
        this.setState({equation, display})                                                  //display if nothing wrong
      }
    }
  }

  handleAC = () => {
    this.setState({
      equation: '0',
      display: '0'
    })
  }

  handleEqual = () => {
    if (/\d$/.test(this.state.equation)) {
      // eslint-disable-next-line
      let result = '' + eval(this.state.equation);
      this.setState({display: result, equation: result});
    } else {
      this.setState({display: 'ERROR'});
    }
  }

  render() {
    return (
      <Container className="App vh-100">
        <div className="row h-100">
          <div className="calculator col-12 align-self-center bg-light">
            <div className="text-right">
              <h5>{this.state.equation}</h5>
              <h3 id="display">{this.state.display}</h3>
            </div>
            <Row className="pad">
              <Button onClick={this.handleAC} color="danger" id="clear" className="col-6">AC</Button>
              <Button onClick={this.handleEquation} color="info" id="divide" className="col-3">/</Button>
              <Button onClick={this.handleEquation} color="info" id="multiply" className="col-3">*</Button>
              <Button onClick={this.handleEquation} color="primary" id="seven" className="col-3">7</Button>
              <Button onClick={this.handleEquation} color="primary" id="eight" className="col-3">8</Button>
              <Button onClick={this.handleEquation} color="primary" id="nine" className="col-3">9</Button>
              <Button onClick={this.handleEquation} color="info" id="subtract" className="col-3">-</Button>
              <Button onClick={this.handleEquation} color="primary" id="four" className="col-3">4</Button>
              <Button onClick={this.handleEquation} color="primary" id="five" className="col-3">5</Button>
              <Button onClick={this.handleEquation} color="primary" id="six" className="col-3">6</Button>
              <Button onClick={this.handleEquation} color="info" id="add" className="col-3">+</Button>
              <div className="row w-75 m-0">
                <Button onClick={this.handleEquation} color="primary" id="one" className="col-4">1</Button>
                <Button onClick={this.handleEquation} color="primary" id="two" className="col-4">2</Button>
                <Button onClick={this.handleEquation} color="primary" id="three" className="col-4">3</Button>
                <Button onClick={this.handleEquation} color="primary" id="zero" className="col-8">0</Button>
                <Button onClick={this.handleEquation} color="primary" id="decimal" className="col-4">.</Button>
              </div>
              <Button onClick={this.handleEqual} color="success" className="col-3" id="equals">=</Button>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
