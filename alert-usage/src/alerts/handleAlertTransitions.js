import React, { Component } from "react";

import "./alerts.css";
import AlertMessage from "./alertTransitions";
import { Container, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class HandleShow extends Component {
  state = {
    show: false
  };

  handleShow = () => {
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then(r => {
    //     if (r.ok) {
    //       return r.json();
    //     }
    //   })
    //   .then(b => console.log(b))
    //   .catch(e => console.log(e));
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col className="mt-4">
            <Button onClick={this.handleShow}>Toggle Alerts</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <AlertMessage show={this.state.show} />
        </Row>
      </Container>
    );
  }
}

export default HandleShow;
