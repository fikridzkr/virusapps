import React, { Component } from "react";
import { Row, Col, Button, Jumbotron, Container } from "react-bootstrap";
import Dates from "../utils/Date";
import axios from "axios";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      globaltotalPositif: 0,
      globaltotalMeninggal: 0,
      globaltotalSembuh: 0,
      indonesiatotalPositif: 0,
      indonesiatotalMeninggal: 0,
      indonesiatotalSembuh: 0,
      // provinsi: [],
    };
  }

  componentDidMount() {
    this.globalData();
    this.indonesiaData();
  }

  // global data
  globalData = () => {
    let config = {
      method: "get",
      url: "https://api.covid19api.com/summary",
      headers: {},
    };

    axios(config)
      .then((response) => {
        let globaltotalPositif = response.data.Global.TotalConfirmed.toLocaleString();
        let globaltotalMeninggal = response.data.Global.TotalDeaths.toLocaleString();
        let globaltotalSembuh = response.data.Global.TotalRecovered.toLocaleString();
        this.setState({
          globaltotalPositif,
          globaltotalMeninggal,
          globaltotalSembuh,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // indonesia data
  indonesiaData = () => {
    let config = {
      method: "get",
      url: "https://api.covid19api.com/live/country/indonesia",
      headers: {},
    };

    axios(config)
      .then((response) => {
        const array = response.data;
        const indonesia = array[array.length - 1];
        const indonesiatotalPositif = indonesia.Confirmed.toLocaleString();
        const indonesiatotalMeninggal = indonesia.Deaths.toLocaleString();
        const indonesiatotalSembuh = indonesia.Recovered.toLocaleString();
        this.setState({
          indonesiatotalPositif,
          indonesiatotalMeninggal,
          indonesiatotalSembuh,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="mb-4">
        <Jumbotron fluid className="bg-danger text-white">
          <Container>
            <h1>#Indonesialawancorona</h1>
            <p className="ubuntu">
              Tetap patuhi protokol kesehatan yakni menggunakan masker mencuci
              tangan, menjaga jarak, membatasi mobilitas dan menjauhi keramaian
              (5M).
            </p>
          </Container>
        </Jumbotron>
        <h1>Data Sebaran Coronavirus Di Dunia dan Indonesia</h1>
        <Row className="mx-4">
          <Col md={3} className="bg-cream p-4 text-left ">
            <h4 className="mb-2">Global</h4>
            <hr className="m-1"></hr>
            <div>
              <span>Total Positif</span>
              <br />
              <span>
                <strong>{this.state.globaltotalPositif}</strong>
              </span>
            </div>
            <div>
              <span>Total Sembuh</span>
              <br />
              <span>
                <strong>{this.state.globaltotalSembuh}</strong>
              </span>
            </div>
            <div>
              <span>Total Meninggal</span>
              <br />
              <span>
                <strong>{this.state.globaltotalMeninggal}</strong>
              </span>
            </div>
          </Col>
          <Col md={3} className="bg-brown p-4 text-left">
            <h4 className="mb-2 ">Indonesia</h4>
            <hr className="m-1"></hr>
            <div>
              <span>Total Positif</span>
              <br />
              <span>
                <strong>{this.state.indonesiatotalPositif}</strong>
              </span>
            </div>
            <div>
              <span>Total Sembuh</span>
              <br />
              <span>
                <strong>{this.state.indonesiatotalSembuh}</strong>
              </span>
            </div>
            <div>
              <span>Total Meninggal</span>
              <br />
              <span>
                <strong>{this.state.indonesiatotalMeninggal}</strong>
              </span>
            </div>
            <p className="my-4">
              <Dates />
            </p>
          </Col>
          <Col md={6} className="images ">
            <div className="h-100 pl-4 row flex-column justify-content-center align-items-start text-white">
              <h2>
                Situasi Virus COVID-19 <br /> Di indonesia
              </h2>
              <Button className="mt-3 ">Simak Tayangan Data Langsung</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
