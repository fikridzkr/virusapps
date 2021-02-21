import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const [indonesiaData, setindonesiaData] = useState([]);

  const chart = () => {
    let idData = [];

    let config = {
      method: "get",
      url: "/live/country/indonesia",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios(config)
      .then((res) => {
        const response = res.data;
        const indonesia = response[response.length - 1];
        const indonesiatotalPositif = indonesia.Confirmed;
        const indonesiatotalMeninggal = indonesia.Deaths;
        const indonesiatotalSembuh = indonesia.Recovered;
        idData.push(indonesiatotalPositif);
        idData.push(indonesiatotalSembuh);
        idData.push(indonesiatotalMeninggal);

        setChartData({
          labels: ["Total Positif", "Total Sembuh", "Total Meninggal"],
          datasets: [
            {
              label: "",
              data: idData,
              backgroundColor: [
                "rgba(255,0,0,0.3)",
                "rgba(0,0,255,0.3)",
                "rgba(255, 255, 0, 0.3)",
              ],
              borderWidth: 15,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="m-auto w-75" id="chart">
      <h1 className="mt-5">Statistik Kasus Coronavirus di Indonesia </h1>
      <hr className="hr bg-dark" />
      <Bar
        data={chartData}
        options={{
          responsive: true,
          title: { display: false },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default Chart;
