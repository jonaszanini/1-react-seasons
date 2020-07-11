import "./style.css";
import React from "react";

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-ight massive ${iconName} icon`}></i>
        </div>
    );
};

//Configuration object
const seasonConfig = {
    //Key value pair
    summer: {
        text: "Lets hit the beach",
        iconName: "sun",
    },
    winter: {
        text: "Burr, it is chilly",
        iconName: "snowflake",
    },
};

const getSeason = (lat, month) => {
    if (month > 4 && month < 9) {
        //ternary expression
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};



export default SeasonDisplay;
