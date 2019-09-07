import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertLink = () => {
    return (
        <Alert variant="secondary" show={true}>
            <Alert.Heading bsPrefix="alert-Heading">Success!!</Alert.Heading>
        <p>
        Your account has been created successfully! Now you can easily 
        <Alert.Link bsPrefix="alert-Link"> Login </Alert.Link> to the site using the Link
        </p>
        </Alert>
    )
}

export default AlertLink;