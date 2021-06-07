import React from "react";
import {ClockViewPropsType} from "./Clock";

export const get2DigitsString = (num: number) => num < 10 ? "0" + num : num;

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </>
};