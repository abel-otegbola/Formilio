'use client'
import { Chart, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js'

Chart.register( ArcElement, Filler, Title, Tooltip, Legend );

import { Doughnut } from 'react-chartjs-2';

export default function EndpointsChart({ endpoints }) {

    const data = {
        labels: ['Loading', 'Loading', 'Loading'],
        datasets: [
            {
                data: [40, 20, 50],
                borderColor: [
                    'rgba(227, 97, 200, 1)',
                    '#6252f2',
                    'rgb(239, 159, 11)'
                ],
                backgroundColor: [
                    'rgba(227, 97, 200, 0.7)',
                    'rgba(92, 82, 242, 0.7)',
                    'rgba(239, 159, 11, 0.7)'
                ],
                borderWidth: 2,
                cutout: "85%",
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