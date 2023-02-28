'use client'
import { ChartData, ChartDataX } from '@/helper/chartData';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import { useEffect, useState } from 'react';

Chart.register( CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend );

import { Line } from 'react-chartjs-2';

export default function SubmissionChart({ submissions }) {
    const [submissionData, setSubmissionData] = useState([0,0,0,0,0,0])

    // useEffect(() => {
    //     setSubmissionData(ChartDataX(submissions)[0])
    // }, [submissions])

    const data = {
        labels: ChartData(),
        datasets: [
            {
                data: submissionData,
                borderColor: "rgba(227, 97, 200, 1)",
                fill: {
                    target: 'origin',
                    above: "rgba(227, 97, 108, 0.2)",
                    below: "rgba(0, 0, 0, 0.1)",
                }
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
        },
        elements: {
            line: {
                tension: 0.4,
                borderWidth: 2,
            },
            point: {
                radius: 2,
                hitRadius: 0
            }
        }
        
    }

    return (
        <Line data={data} options={options} />
    )
}