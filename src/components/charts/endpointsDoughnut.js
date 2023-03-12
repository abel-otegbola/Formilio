'use client'
import { Chart, ArcElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import { useEffect, useState } from 'react';

Chart.register( ArcElement, Filler, Title, Tooltip, Legend );

import { Doughnut } from 'react-chartjs-2';

export default function EndpointsChart({ endpoints, submissions }) {
    const [endpointsTitles, setEndpointsTitles] = useState(['Loading', 'Loading', 'Loading'])
    const [endpointsData, setEndpointsData] = useState([0,0,0])

    useEffect(() => {

        //set Endpoints
        let endpointsTitles = endpoints?.map(item => ( item.title )) || []

        setEndpointsTitles(endpointsTitles)

        // get the key fields from endpoints and submissions, store into an array
        let endpointsKeys = endpoints?.map(item => ( item.key )) || []
        let submissionsKeys = submissions?.map(item => ( item.key )) || []

        //Find number of each submissions for all endpoints using the keys.
        let resultArray = []

        for(let i=0; i<endpointsKeys.length; i++) {
            resultArray.push(submissionsKeys.filter(item => item === endpointsKeys[i]).length)
        }

        setEndpointsData(resultArray)
    }, [endpoints, submissions])

    const data = {
        labels: endpointsTitles,
        datasets: [
            {
                data: endpointsData,
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