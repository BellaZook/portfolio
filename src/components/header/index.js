import React from 'react';
import { Jumbotron } from 'reactstrap';
import './appHeader.css';


const AppHeader = (props) => {
    return (
        <div>
            <Jumbotron className="jumbotron-fluid align-middle mx-auto row app-header">
                <div className="container text-center text-white col align-self-center">
                    <h1 className="header-h1">FRONT END WEB DEVELOPER</h1>
                    <br />
                    <h3 className="lead header-h3">Using customer feedback to create a better customer experience</h3>
                </div>
            </Jumbotron>
        </div>
    );
};

export default AppHeader;