import React from "react";
import { BarChart, Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    student_id: 1,
    name: "Arafat",
    physics: 87,
    chemistry: 78,
    math: 92,
  },
  {
    student_id: 2,
    name: "Bilkis",
    physics: 72,
    chemistry: 68,
    math: 74,
  },
  {
    student_id: 3,
    name: "Chanchal",
    physics: 95,
    chemistry: 90,
    math: 88,
  },
  {
    student_id: 4,
    name: "Dipu",
    physics: 64,
    chemistry: 70,
    math: 59,
  },
  {
    student_id: 5,
    name: "Elma",
    physics: 78,
    chemistry: 80,
    math: 76,
  },
  {
    student_id: 6,
    name: "Farhan",
    physics: 91,
    chemistry: 89,
    math: 94,
  },
  {
    student_id: 7,
    name: "Gulshan",
    physics: 55,
    chemistry: 60,
    math: 58,
  },
  {
    student_id: 8,
    name: "Habib",
    physics: 83,
    chemistry: 85,
    math: 79,
  },
  {
    student_id: 9,
    name: "Irin",
    physics: 69,
    chemistry: 75,
    math: 70,
  },
  {
    student_id: 10,
    name: "Junaid",
    physics: 88,
    chemistry: 84,
    math: 90,
  },
];

const ResultsChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey={'chemistry'} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultsChart;
