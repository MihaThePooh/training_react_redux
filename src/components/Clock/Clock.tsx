import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: "digital" | "analog"
}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        // в ретурне useEffect'a можно вставить "функция зачистки". эта функция вызывается только тогда
        // когда компонента умерает (аналогия с ComponentWillAnmount в классовых компонентах)
        // тут мы зачищаем setInterval, чтобы он не тикал на фоне, при переключении на другие компоненты
        // избегаем утечки памяти

        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }

    }, []);

    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>;
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>;
    }

    return <div>{view}</div>
};

export type ClockViewPropsType = {
    date: Date
}

