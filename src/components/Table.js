import React, { Component } from "react";
import { Table } from "react-bootstrap";
export default class Tables extends Component {
  render() {
    return (
      <div className="m-auto w-75">
        <h3 className="mt-3">
          Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi
        </h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No. </th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
