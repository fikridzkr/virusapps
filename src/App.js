import "./App.css";
import Navigation from "./components/Navigation";
import { Row, Col, Button } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="mt-4">
        <h1>Data Sebaran</h1>
        <Row className="m-4">
          <Col md={3} className="bg-danger p-4 text-left ">
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
          <Col md={3} className="bg-success p-4 text-left">
            <h4 className="mb-2">Indonesia</h4>
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
          <Col md={6} className="py-5 images img-fluid">
            <div className="mh-100 pl-4 row flex-column justify-content-center align-items-start">
              <h4>
                Situasi Virus COVID-19 <br />
                Di indonesia
              </h4>
              <Button>Simak Tayangan Data Langsung</Button>
            </div>
          </Col>
          <Col className="my-3">
            <p>tanggal hari ini</p>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
