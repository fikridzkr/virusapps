import React, { Component } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";

export default class Hotline extends Component {
  render() {
    return (
      <div className="m-auto display-block" id="hotline">
        <h1 className="my-3">Coronavirus Hotline Indonesia</h1>
        <p>
          Layanan darurat via telepon yang disediakan oleh Kemkes dan juga
          Pemprov DKI Jakarta
        </p>
        <Row>
          <Col md={2} className="bg-grey mr-3">
            <Card.Body>
              <img href="" alt="logo" />
              <Card.Text>
                <a href="tel:2222">nomor</a>
              </Card.Text>
              <p>mentri</p>
            </Card.Body>
          </Col>
          <Col md={2} className="bg-grey mr-3">
            <Card.Body>
              <img href="" alt="logo" />
              <Card.Text>
                <a href="tel:2222">nomor</a>
              </Card.Text>
              <p>mentri</p>
            </Card.Body>
          </Col>
          <Col md={2} className="bg-grey mr-3">
            <Card.Body>
              <img href="" alt="logo" />
              <Card.Text>
                <a href="tel:2222">nomor</a>
              </Card.Text>
              <p>mentri</p>
            </Card.Body>
          </Col>
          <Col md={2} className="bg-grey mr-3">
            <Card.Body>
              <img href="" alt="logo" />
              <Card.Text>
                <a href="tel:2222">nomor</a>
              </Card.Text>
              <p>mentri</p>
            </Card.Body>
          </Col>
        </Row>
      </div>
    );
  }
}
