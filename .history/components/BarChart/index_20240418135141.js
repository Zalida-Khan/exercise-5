import styles from "./BarChart.module.css";
import { useState, useEffect } from "next.js";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
}

export default funstion(BarChart) {
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
                    data: 
                }
            ]
        })
    })


}