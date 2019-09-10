import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <div className="lander">
                <h1>Accordion Actions</h1>
                <p>A simple app for Accordion actions react-bootstrap</p>
                <div>
                    <Link to='/accordion'>Link to Accordions page usage</Link>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Home);