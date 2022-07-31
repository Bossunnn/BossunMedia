import React from 'react';
import './TrendCard.css';
import {TrendData} from "../../Data/TrenData";

function TrendCard(props) {
    return (
        <div className="TrendCard">
            <h3>Trend for you</h3>
            {TrendData.map((trend, id) => {
                return (
                    <div className="trend" key={id}>
                        <span>#{trend.name}</span>
                        <span>{trend.shares} shares</span>
                    </div>
                )
            })}
        </div>
    );
}

export default TrendCard;