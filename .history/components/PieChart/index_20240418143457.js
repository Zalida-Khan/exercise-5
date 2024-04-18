import { Pie } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'; 
import { useState, useEffect } from "react";
        ChartJS.register(
        CategoryScale,
        ArcElement,
        Tooltip,
        Legend
        )


export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    
    const [chartOptions, setchartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Purple", "Pink", "Green", "Orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [2, 6, 15, 20, 12, 9, 1],
                    borderColor: 
                    [
                        'rgb(255, 0, 0)',
                        'rgb(153, 0, 102)',
                        'rgb(0, 234, 32)',
                        'rgb(233, 05, 40)',
                        'rgb(233, 10, 34)',
                        'rgb(30, 10, 255)',
                    ],

                    backgroundColor: 
                    [
                        'rgb(238, 130, 238, 0.4)',
                        'rgb(60, 179, 113, 0.4)',
                        'rgb(60, 179, 113, 0.4)',
                        'rgb(233, 05, 40, 0.4)',
                        'rgb(233, 10, 34, 0.4)',
                        'rgb(30, 10, 255, 0.4)',
                    ],
                    borderWidth: 1,
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
            <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px" }}/>
        </div>
        
        </>
    )
}