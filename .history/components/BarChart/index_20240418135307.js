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
                    data: [10, 6, 15, 20, 12, 4, 5],
                    borderColor: 'rgb(233, 232, 255)',
                    backgroundColor: 'rgb(255, 255, 255, 0.4)'
                }
            ]
        })
    })


}