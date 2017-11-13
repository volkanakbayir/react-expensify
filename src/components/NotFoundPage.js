import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 Not Found!</h1>
            <Link to="/">Go to home</Link>
        </div>
    );
};

export default NotFoundPage;