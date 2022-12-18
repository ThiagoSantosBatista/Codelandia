import React from "react";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import { TimeBox } from "./style";

const Time = () => {
    return (
        <TimeBox>
            <Clock />
            <p>51min</p>
        </TimeBox>
    );
};

export default Time;
