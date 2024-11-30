import React from 'react'
import Card from './Card/Card'
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts';
import './GridContent.css'


export const GridContent = () => {
    // Data hardcodeada de la grafica lineal
    const lineChartProps = {
        xAxis: [{data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}],
        series: [{data: [10000, 9200, 11000, 10500, 11300, 12500 , 12000 , 13000, 10000, 12300, 12500, 13000]}],
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
            <Card className="card2 card-2" title={"Calendar"} img={"./calendar.webp"} ></Card>
            <Card className="card2 card-3" title={"Support & FAQ"} img={"./faq.webp"} ></Card>
            <Card className="card card-4" chart={<PieChart {...pieChartProps} />}></Card>
            <Card className="card2 card-5" title={"Financial Education"} img={"./finance.webp"} ></Card>
            <Card className="card card-6" walletTitle={"Your Wallet"} number={"$ 13.000"} ></Card>
        </div>
    );
}
