import { LineChart as LChart, Line } from "recharts";

const LineChart = () => {
  const mathMarksData = [
    {
      id: 1,
      name: "Student 1",
      marks: 75,
    },
    {
      id: 2,
      name: "Student 2",
      marks: 85,
    },
    {
      id: 3,
      name: "Student 3",
      marks: 90,
    },
    {
      id: 4,
      name: "Student 4",
      marks: 60,
    },
    {
      id: 5,
      name: "Student 5",
      marks: 95,
    },
    {
      id: 6,
      name: "Student 6",
      marks: 70,
    },
    {
      id: 7,
      name: "Student 7",
      marks: 88,
    },
    {
      id: 8,
      name: "Student 8",
      marks: 92,
    },
    {
      id: 9,
      name: "Student 9",
      marks: 77,
    },
    {
      id: 10,
      name: "Student 10",
      marks: 83,
    },
  ];

  return (
    <div>
      <LChart width={500} height={400} data={mathMarksData}></LChart>
      <Line dataKey="marks" stroke="red"></Line>
    </div>
  );
};

export default LineChart;
