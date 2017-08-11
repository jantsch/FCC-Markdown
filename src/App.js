

import React from 'react';
import { Component } from 'react'
import './App.css';
import MdTransformed from './MdTransformed'
import InputArea from './InputArea'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Row, Col} from 'react-bootstrap';


class App extends  Component {
  constructor(props) {
    super(props)
      this.state = {
        text:"Heading \n=======\n\nSub-heading \n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \n line break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n1. apples\n2. oranges\n3. pears\n\nThe rain---not the reign---in Spain.\n\n *[Herman Fassett](https:/freecodecamp.com/hermanfassett)*"
    }

  }
  onChange = (inputText) => {        
      
        this.setState({
            text: inputText
        })
  }
  render() {
      return (
          <div className="App">
            <div className="App-header">         
              <h2>FCC - Markdown Previewer</h2>
            </div>  
            <Row >     
                <Col sm={1} md={1}></Col>
                <Col sm={5} md={5}>
                    <InputArea text={this.state.text} onChange={this.onChange} />
                </Col>
                <Col sm={5} md={4}>
                    <MdTransformed textToTransform={this.state.text}/>
                </Col>
                <Col sm={1} md={1}></Col>
            </Row>
          </div>
        );
}}




export default App;
