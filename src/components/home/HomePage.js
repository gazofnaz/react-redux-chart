import React from 'react';
import {Radar} from 'react-chartjs';

class HomePage extends React.Component {
    render(){

        const ratings = [
            2.5, // Server Configuration
            2,   // Security
            3,   // DevOps
            2.5, // Databases
            4,   // Automated Testing
            4,   // Coding (Backend)
            3.5, // Coding (Front End)
            3,   // Design & UX
            2.5, // Coding (JS Frameworks)
            3    // Documentation
        ];

        const chartData = {
            labels: [
                "Server Configuration",
                "Security",
                "Dev Ops",
                "Databases",
                "Automated Testing",
                "Coding (Backend)",
                "Coding (Front End)",
                "Design & UX",
                "Coding (JS Frameworks)",
                "Documentation"
            ],
            datasets: [
                {
                    label: "Ratings",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: ratings
                }
            ]
        };

        const chartOptions = {
            // remember to use v1 docs: https://github.com/chartjs/Chart.js/blob/v1.1.1/docs/03-Radar-Chart.md
            responsive: true,
            maintainAspectRatio: true,
            scaleShowLabels: true,
            pointLabelFontSize : 12
        };


        return(
            <div>
                <Radar data={chartData} options={chartOptions}/>
            </div>
        );
    }
}

export default HomePage;