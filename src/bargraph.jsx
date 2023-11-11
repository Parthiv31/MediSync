import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Custom Data Bar Chart',
    },
  },
};

function CustomDataBarChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
        {
          label: 'Yes',
         // data: yesResponses,
          borderColor: 'rgb(0, 255, 0)',
          backgroundColor: 'rgba(0, 255, 0, 0.5)',
          barThickness: 20, // Set this value to your preferred thickness
        },
        {
          label: 'No',
         // data: noResponses,
          borderColor: 'rgb(255, 0, 0)',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          barThickness: 20, // Set this value to your preferred thickness
        },
      ],
  });

  useEffect(() => {
    // Custom data for the bar chart
    const customData = [
      { timeOfDay: 'Morning', yes: 1,no:0  },
      { timeOfDay: 'Afternoon', yes: 0,no:1  },
      { timeOfDay: 'Evening', yes: 1,no:0 },
      // Add more data as needed
    ];

    // Extract labels (time of day), "yes" responses, and "no" responses from custom data
    const labels = customData.map((entry) => entry.timeOfDay);
    const yesResponses = customData.map((entry) => entry.yes);
    const noResponses = customData.map((entry) => entry.no);

    // Update the chart data
    setChartData({
      labels,
      datasets: [
        {
          label: 'Yes',
          data: yesResponses,
          borderColor: 'rgb(0, 255, 0)',
          backgroundColor: 'rgba(0, 255, 0, 0.5)',
        },
        {
          label: 'No',
          data: noResponses,
          borderColor: 'rgb(255, 0, 0)',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
        },
      ],
    });
  }, []);

  return (
    <div className="w-full h-full">
      <Bar options={options} data={chartData} />
    </div>
  );
}

export default CustomDataBarChart;
