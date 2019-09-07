import React, {Component} from 'react';
import Alert from 'react-bootstrap/Alert';

class Alerts extends Component {
    constructor(props) {
        super(props);
        const alertsTypes = ['secondary', 'success', 'danger', 'info', 'warning', 'light', 'dark'];
        this.state={alertsTypes}
    }
    render() {
    return (
        <>
            <p>This is the alerts page</p>
            <Alert variant='primary' show={true}>
                This is a primary alert check it out!!
            </Alert>
            <div>
                {this.state.alertsTypes.map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    This is a {variant} alert!!
                </Alert>
                ))}
            </div>
        </>
    )
}
}

export default Alerts;