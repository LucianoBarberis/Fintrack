import React from 'react'
import Card from './Card/Card'
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts';
import './GridContent.css'
import { height } from '@mui/system';

export const GridContent = () => {
    const lineChartProps = {
        xAxis: [{data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}],
        series: [{data: [10000, 9200, 11000, 10500, 11300, 12500 , 12000 , 13000, 10000, 12300, 12500, 13000]}],
        width: 600,
        height: 350
    }

    const pieChartProps = {
        series: [
            {
                data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                ],
                paddingAngle: 1,
                cornerRadius: 5,
            },
        ],
        width: 320,
        height: 350,
    };

    return (
        <div className="grid">
            <Card className="card card-1" chart={<LineChart {...lineChartProps} />}></Card>
            <Card className="card card-2"></Card>
            <Card className="card card-3"></Card>
            <Card className="card card-4" chart={<PieChart {...pieChartProps} />}></Card>
            <Card className="card card-5"></Card>
            <Card className="card card-6"></Card>
        </div>
    );
}
