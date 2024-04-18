import styles from "./BarChart.module.css";
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
{
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
                    label: 'Sales $',
                    data: [10, 6, 15, 20, 12, 4, 5],
                    borderColor: 'rgb(233, 232, 255)',
                    backgroundColor: 'rgb(255, 255, 255, 0.4)'
                }
            ]
        })
    })
    
    return(
        <>
        <div>
            <Bar data={chartData} options={chartOptions} style={{width= "500px", }}/>
        </div>
        
        </>
    )

}