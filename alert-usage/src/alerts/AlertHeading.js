import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertHeading = () => {
    return (
        <Alert variant="dark" show={true}>
            <Alert.Heading bsPrefix="alert-heading">Success!!</Alert.Heading>
        <p>
        Your account has been created successfully! Now you can easily login to the site
        </p>
        </Alert>
    )
}

export default AlertHeading;