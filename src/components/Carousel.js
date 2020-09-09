import React, { Component } from "react";
import sandcastle from "../assets/sandcastle.jpg";
import work from "../assets/work.jpg";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Tebogo Gift",
          subTitle: "React Projects",
          imgSrc: work,
          link: "https://github.com/Selfmade20/react-projects",
          selected: false,
        },
        {
          id: 1,
          title: "TCG Projects",
          subTitle: "The institution which made me",
          imgSrc: sandcastle,
          link: "https://github.com/Selfmade20/tcg",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          onClick={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
