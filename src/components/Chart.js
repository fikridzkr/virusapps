import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartdata: {
        labels: ["Positif", "Sembuh", "Meninggal"],
        datasets: [
          {
            label: "",
            data: [1000000, 1119111, 31111],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 10,
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="Chart m-auto w-75 ">
        <Bar
          data={this.state.chartdata}
          width={100}
          height={50}
          options={{
            title: {
              display: true,
              text: "Live Data Statistik CoronaVirus Di Indonesia",
              fontSize: 25,
              fontFamily: "'Playfair Display',serif",
            },
            legend: {
              display: false,
            },
          }}
        />
      </div>
    );
  }
}
