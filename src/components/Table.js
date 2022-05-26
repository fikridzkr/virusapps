import axios from "axios";
import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class Tables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      provinsi: [],
    };
  }

  componentDidMount() {
    let config = {
      method: "get",
      url:
        "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
      headers: {},
    };

    axios(config)
      .then((response) => {
        let provinsi = response.data.features;

        this.setState({
          provinsi,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div id="provinsi" className="m-auto w-75">
        <h1 className="mt-5">
          Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi
        </h1>
        <hr className="hr bg-dark" />
        <div className="scroll">
          <Table striped bordered hover responsive>
            <thead className="bg-danger text-white">
              <tr>
                <th>No. </th>
                <th>Kode Provinsi</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {this.state.provinsi?.map((value) => {
                return (
                  <tr>
                    <td>{value.attributes.FID}</td>
                    <td>{value.attributes.Kode_Provi}</td>
                    <td>{value.attributes.Provinsi}</td>
                    <td>{value.attributes.Kasus_Posi}</td>
                    <td>{value.attributes.Kasus_Semb}</td>
                    <td>{value.attributes.Kasus_Meni}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
