import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'; 
import { useState, useEffect } from "react";
        ChartJS.register(
        CategoryScale,
        BarElement,
        Title,
        Tooltip,
        Legend
        )


export default function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    
    const [chartOptions, setchartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Data 1',
                    data: [10, 6, 15, 20, 12, 4, 5],
                    borderColor: 'rgb(233, 54, 23)',
                    backgroundColor: 'rgb(106, 90, 205, 0.4)'
                }, 
                {
                    label: 'Data 2',
                    data: [2, 6, 15, 20, 12, 9, 1],
                    borderColor: 'rgb(233, 232, 255)',
                    backgroundColor: 'rgb(255, 45, 243, 0.4)'
                },
                {
                    label: 'Data 3',
                    data: [10, 6, 2, 9, 5, 15, 5],
                    borderColor: 'rgb(233, 232, 255)',
                    backgroundColor: 'rgb(255, 200, 255, 0.4)'
                }
            ]
        })

        setchartOptions({
            indexAxis: 'y',
            plugin: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })

        })
        
    
    return(
        <>
        <div>
            <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px" }}/>
        </div>
        
        </>
    )
}