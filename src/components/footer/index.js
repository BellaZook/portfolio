import React from 'react';
import { Jumbotron } from 'reactstrap';
import Divider from '../divider';
import './footer.css';

const AppFooter = () => {
    return (
        <React.Fragment>
            <Divider border="no-border p-lg" />
            <Jumbotron className="jumbotron-fluid align-middle mx-auto row app-footer">
                <footer className="container">
                    <div className="container text-center text-white col align-self-center">
                        <p>Built with React.js/reactStrap</p>
                        <p>&copy; ANTHONY.ROBIN 2019</p>
                    </div>
                </footer>
            </Jumbotron>
        </React.Fragment>
    );
}

export default AppFooter;