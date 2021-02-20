import React, { Component } from "react";
import { Row, Card, Container } from "react-bootstrap";
import hotline from "./hotline.json";
export default class Hotline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotline: hotline,
    };
  }

  render() {
    const { hotline } = this.state;
    return (
      <div className="mb-5" id="hotline">
        <h1 className="mt-5">Coronavirus Hotline Indonesia</h1>
        <hr className="hr bg-dark" />
        <p className="size">
          Layanan darurat via telepon yang disediakan oleh Kemkes dan juga
          Pemprov DKI Jakarta
        </p>
        <Container>
          <Row>
            {hotline.map((value) => {
              return (
                <Card
                  className="mx-auto my-2 shadow sizing-card"
                  key={value.id}
                >
                  <Card.Body>
                    <img
                      src={value.gambar}
                      alt="logo"
                      className="img-fluid w-25 mb-2"
                    />
                    <Card.Text>
                      <a
                        href={"tel:" + value.nomor}
                        className="text-decoration-none text-dark"
                      >
                        {value.nomor}
                      </a>
                    </Card.Text>
                    <p>{value.nama}</p>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
