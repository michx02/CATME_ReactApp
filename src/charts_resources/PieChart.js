import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
    return (
        <div className="chart-container">
            <Pie
                height='300px'
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Student's Evaluation Analysis"
                        }
                    }
                }}
            />
        </div>
    );
}
export default PieChart;
