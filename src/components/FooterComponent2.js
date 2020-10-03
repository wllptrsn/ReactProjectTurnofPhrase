import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer bg-warning text-white">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="./home">Home</a></li>
                            <li><a href="./about">About</a></li>
                            <li><a href="./demo">Demo</a></li>
                            <li><a href="./feedback">Feedback</a></li>
                            <li><a href="./team">Team</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="michelecynthia@gmail.com"><i className="fa fa-envelope-o" /> michelecynthia@gmail.com</a><br />
                        <a role="button" className="btn btn-link" href="wllnptrsn92@gmail.com"><i className="fa fa-envelope-o" /> wllnptrsn92@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;