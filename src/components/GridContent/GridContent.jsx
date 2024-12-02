import React from 'react'
import Card from './Card/Card'
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts';
import './GridContent.css'


export const GridContent = () => {
    // Data hardcodeada de la grafica lineal
    const lineChartProps = {
        xAxis: [{data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}],
        series: [{data: [0, 0, 0, 0, 0, 0 , 0 , 0, 0, 0, 0, 0]}],
        width: 600,
        height: 350
    }
    // Data harcodeada de la donut chart
    const pieChartProps = {
        series: [
            {
                data: [
                    { id: 0, value: 60, label: "G. Fijos" },
                    { id: 1, value: 20, label: "G. Libres" },
                    { id: 2, value: 10, label: "Ahorro" },
                    { id: 3, value: 10, label: "Inverción" },
                ],
                paddingAngle: 1,
                cornerRadius: 5,
                outerRadius: 80,
            },
        ],
        width: 320,
        height: 350,
    };

    return (
        <div className="grid">
            <Card className="card card-1" chart={<LineChart {...lineChartProps} />}></Card>

            <Card className="card2 card-2" title={"Calendar"} img={"https://images.unsplash.com/photo-1435527173128-983b87201f4d?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} ></Card>

            <Card className="card2 card-3" title={"Support & FAQ"} img={"https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} ></Card>

            <Card className="card card-4" chart={<PieChart {...pieChartProps} />}></Card>

            <Card className="card2 card-5" title={"Financial education"} img={"https://images.unsplash.com/photo-1579225663317-c0251b4369bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} ></Card>

            <Card className="card card-6" walletTitle={"Your wallet"} number={"$ 0"} ></Card>
        </div>
    );
}
