import React from "react";
import Alert from "react-bootstrap/Alert";
import { Col } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

import { Main } from "./Main";

const AlertMessages = props => {
    return (
        <Main>
            <Col>
                <CSSTransition
                    in={props.show}
                    timeout={300}
                    classNames="appearActive"
                    unmountOnExit
                >
                    <Alert variant="danger" fade="false" show={true}>
                        Reactbootstrap Alert having 'show' class active
                    </Alert>
                </CSSTransition>
            </Col>
            <Col>
                <CSSTransition
                    in={props.show}
                    timeout={300}
                    classNames="toggen"
                    unmountOnExit
                >
                    <Alert
                        transition="Fade"
                        variant="success"
                        fade="false"
                    >
                        Reactstrap Alert having 'show' class disabled{" "}
                    </Alert>
                </CSSTransition>
            </Col>
        </Main>
    );
};
export default AlertMessage;
