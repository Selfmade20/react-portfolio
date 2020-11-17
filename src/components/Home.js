import React from "react";
import Hero from "./Hero";
import Carousel from "./Carousel";
import { Container } from "react-bootstrap";
function Home(props) {
  return (
    <Container>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />
    </Container>
  );
}

export default Home;
