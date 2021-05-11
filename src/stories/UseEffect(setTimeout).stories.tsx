import React, {useEffect, useState} from "react";

export default {
    title: "UseEffect(setTimeout) demo"
}

export const Example1 = () => {

    const [counter, setCounter] = useState(1);
    const [fakeCounter, setFakeCounter] = useState(1);

    // useEffect c setTimeout'ом
    useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, [counter]);

    // useEffect c setInterval'ом
    useEffect(() => {
        setInterval(() => {
            setFakeCounter(fakeCounter + 1)
        }, 1000)
    });

    return (
        <>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            Fake: {fakeCounter}
        </>
    )
};

