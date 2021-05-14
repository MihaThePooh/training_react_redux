import React, {useEffect, useState} from "react";

type PropsType = {}

const get2DigitsString = (num: number) => num < 10 ? "0" + num : num;

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

    return <div>
        <span>{get2DigitsString(date.getHours())}</span> :
        <span>{get2DigitsString(date.getMinutes())}</span> :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </div>
};