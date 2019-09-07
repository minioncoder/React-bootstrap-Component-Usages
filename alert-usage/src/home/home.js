import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Home = (props) => {
    console.log(props);
    return (
        <div className="Home">
            <div className="lander">
                <h1>Alert Actions</h1>
                <p>A simple app for alert actions react-bootstrap</p>
                <div>
                    <Link to='/alerts'>Link to alerts page usage</Link>
                </div>
                <div>
                    <Link to='/alertsAPI'>Link to alerts API usages</Link>
                </div>
                <div>
                    <Link to='/alertTransitions'>Link to alert Transitions fade in/out</Link>
                </div>
                <div>
                    <Link to='/alertHeading'>Link to alert Heading</Link>
                </div>
                <div>
                    <Link to='/alertLink'>Link to alert Links</Link>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Home);