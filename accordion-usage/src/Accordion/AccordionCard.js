import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


var AccordionStyle = {
    color: 'Black',
    paddingRight: 20
}

class Accordions extends Component {
    render() {
        return (
            <>
                <p>This is the Accordion page</p>
                <Row>
                    <Col>
                        <p>Basic example of Accordion</p>
                        <Accordion defaultActiveKey="0" style={AccordionStyle}>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Click Me and expand the card!!
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body style={{ color: 'black' }}>Hello! I'm the body of card</Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Click me to expand the card!!
                            </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body style={{ color: 'black' }}>Hello! I'm another body of the card</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col>
                        <p>Accordion with Entire Header Clickable</p>
                        <Accordion defaultActiveKey="0" style={AccordionStyle}>
                            <Card style={{color: 'blue'}}>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Click me to expand the card!!
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card style={{color: 'blue'}}>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Click me and expand the card!!
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col>
                        <p>Accordion with fully collapsed state</p>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Click me to expand the card !! 
                            </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body style={{ color: 'black' }}>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Click me and expand the card!!
                            </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body style={{ color: 'black' }}>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Accordions;