import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Replace this with your actual medicine data
    const medicineData = [
      { category: 'Painkillers', total: 50 },
      { category: 'Vitamins', total: 30 },
      { category: 'Antibiotics', total: 20 },
    ];

    // Create the chart data object
    const data = {
      labels: medicineData.map((entry) => entry.category),
      datasets: [
        {
          label: 'Medicine Categories',
          data: medicineData.map((entry) => entry.total),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // Painkillers
            'rgba(54, 162, 235, 0.2)', // Vitamins
            'rgba(255, 206, 86, 0.2)', // Antibiotics
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    // Set the chart data
    setChartData(data);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Position the legend at the bottom
      },
    },
  };

  return chartData ? <Doughnut data={chartData} options={options} /> : null;
}

export default DoughnutChart;
