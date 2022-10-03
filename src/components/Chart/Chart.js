import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = props => {
    const datapointsValue = props.datapoints.map(datapoints => (datapoints.value))

    const totalMaximumValue = Math.max(...datapointsValue);


    return (
        <div className="chart">
            {props.datapoints.map(datapoints => (
                <ChartBar
                    key={datapoints.label}
                    label={datapoints.label}
                    value={datapoints.value}
                    maxValue={totalMaximumValue}
                />
            ))}
        </div>
    );
}

export default Chart;