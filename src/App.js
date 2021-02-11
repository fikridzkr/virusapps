import "./App.css";
import Navigation from "./components/Navigation";
import { Row, Col, Button, Jumbotron, Container } from "react-bootstrap";
import Chart from "./components/Chart";
import Dates from "./utils/Date";
import Tables from "./components/Table";
function App() {
  return (
    <div className="App">
      <Navigation />
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
      <h1>Data Sebaran</h1>
      <Row className="mx-4">
        <Col md={3} className="bg-cream p-4 text-left ">
          <h4 className="mb-2">Global</h4>
          <hr className="m-1"></hr>
          <div>
            <span>Positif</span>
            <br />
            <span>
              <strong>11299921</strong>
            </span>
          </div>
          <div>
            <span>Sembuh</span>
            <br />
            <span>
              <strong>11299921</strong>
            </span>
          </div>
          <div>
            <span>Meninggal</span>
            <br />
            <span>
              <strong>11299921</strong>
            </span>
          </div>
        </Col>
        <Col md={3} className="bg-brown p-4 text-left">
          <h4 className="mb-2 ">Indonesia</h4>
          <hr className="m-1"></hr>
          <div>
            <span>Positif</span>
            <br />
            <span>
              <strong>11299921</strong>
            </span>
          </div>
          <div>
            <span>Sembuh</span>
            <br />
            <span>
              <strong>11299921</strong>
            </span>
          </div>
          <div>
            <span>Meninggal</span>
            <br />
            <span>
              <strong>11299921</strong>
            </span>
          </div>
          <p className="my-4">Update Terakhir</p>
        </Col>
        <Col md={6} className="images ">
          <div className="h-100 pl-4 row flex-column justify-content-center align-items-start text-white">
            <h2>
              Situasi Virus COVID-19 <br /> Di indonesia
            </h2>
            <Button className="mt-3 ">Simak Tayangan Data Langsung</Button>
          </div>
        </Col>
        <Col className="my-3">
          <Dates />
        </Col>
      </Row>
      <Chart />
      <Tables />
    </div>
  );
}

export default App;
