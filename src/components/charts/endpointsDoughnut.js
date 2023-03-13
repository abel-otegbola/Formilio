'use client'
import { Chart, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js';

Chart.register( ArcElement, Filler, Title, Tooltip, Legend );

import { Doughnut } from 'react-chartjs-2';

export default function EndpointsChart({ endpointsTitles, endpointsData }) {


    const data = {
        labels: endpointsTitles,
        datasets: [
            {
                data: endpointsData,
                borderColor: [
                    'rgba(227, 97, 200, 1)',
                    '#6252f2',
                    'rgba(239, 159, 11, 1)',
                    'rgba(0, 128, 128, 1)',
                    'rgba(0, 191, 255, 1)',
                    'rgba(199, 21, 133, 1)'
                ],
                backgroundColor: [
                    'rgba(227, 97, 200, 0.7)',
                    'rgba(92, 82, 242, 0.7)',
                    'rgba(239, 159, 11, 0.7)',
                    'rgba(0, 128, 128, 0.7)',
                    'rgba(0, 191, 255, 0.7)',
                    'rgba(199, 21, 133, 0.7)'
                ],
                borderWidth: 2,
                cutout: "90%",
                borderJoinStyle: "round",
                borderRadius: 2
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        }
        
    }

    return (
        <Doughnut data={data} options={options} />
    )
}