import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Tebogo Gift",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: "Be Relentless",
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects'
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's talk",
      },
    }
  }
  render() {
    return (
      <Router>
        <Container>

        </Container>
      </Router>
    );
  }
}

export default App;