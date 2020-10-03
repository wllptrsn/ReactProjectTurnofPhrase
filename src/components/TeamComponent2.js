import React from 'react';
import { Col, Row, Card, CardBody } from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
//import 'bootstrap-social/bootstrap-social.css';//



function Team() {
  return (
    <React.Fragment>
      <Card className="my-5 px-5 pb-5 text-center">
        <CardBody>
          <Row>
            <Col>
              <h1>Meet the Team</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="6" className="mb-lg-0 mb-5">

              <img src="../assets/images/cyn.png" width="200" height="200" className="rounded-circle z-depth-1 img-fluid"
                alt="Cynthia" />


              <h3 className="font-weight-bold mt-4 mb-3"> Cynthia Etoughe</h3>
              <p className="text-uppercase" color="primary">Lab Analyst</p>


              <blockquote className="blockquote">
                <i className="fa fa-quote-left" />
                <p className="grey-text">
                  I have a background in analytical chemistry and I always like solving anagrams. Turn of phrase is an interesting game that keeps the player engaged and stimulated. It is not overly complex and it is fun for the young and the young-at-heart
                </p>

              </blockquote>

            </Col>
            <Col lg="6" className="mb-lg-0 mb-5">

              <img src="../assets/images/circle-will.png" width="200" height="200" className="rounded-circle z-depth-1 img-fluid"
                alt="Will" />

              <h3 className="font-weight-bold mt-4 mb-3"> William Peterson</h3>
              <p className="text-uppercase primary-text">Graphic Designer</p>

              <blockquote className="blockquote">
                <i className="fa fa-quote-left " />
                <p className="grey-text">
                  Cautiously incompetent at coding, working my way up to cautiously competent.
                </p>

              </blockquote>

            </Col>



          </Row>
        </CardBody>
      </Card>


    </React.Fragment>
  );
}


export default Team; 