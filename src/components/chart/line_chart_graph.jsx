import React from "react";
import { Line } from "react-chartjs-2";

function Graph() {
  return (
    <div className="line__chart__data">
      <Line
        height={200}
        width={600}
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              backgroundColor: "#3B99FC",
              borderColor: "#3B99FC",
              fill: false,
              label: "689 Project done",
              data: [
                800,
                800,
                500,
                500,
                800,
                490,
                500,
                550,
                520,
                700,
                500,
                700,
              ],
              hideInLegendAndTooltip: false,
              steppedLine: false,
            },
            {
              label: "689 New applications",
              fill: false,
              backgroundColor: "#F52D56",
              borderColor: "#F52D56",
              data: [
                500,
                500,
                200,
                200,
                400,
                800,
                500,
                455,
                600,
                200,
                200,
                400,
              ],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
export default Graph;
