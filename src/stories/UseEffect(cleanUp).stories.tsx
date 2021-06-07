import React, {useEffect, useState} from "react";

export default {
    title: "UseEffect(cleanUp) demo"
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1);

    console.log("Component rendered with: " + counter);

    useEffect(() => {
        console.log("Effect occurred(произошел): " + counter);

        return () => {
            console.log("Reset effect: " + counter)
        }
        // cleanup callback - это функция-сброс useEffect'a. аналог ComponentWillUnmount. этот callback, который мы
        // описали в return useEffect'a будет вызываться каждый раз, когда компонента будет умирать, либо перед
        // очередным вызовом useEffect'a
    }, [counter]);

    const increase = () => { setCounter(counter + 1) };

    return <>Hello, {counter}<button onClick={increase}>+</button></>
};


export const KeysTrackerExample = () => {

    const [text, setText] = useState("");

    console.log("Component rendered with: " + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        };

        window.addEventListener("keypress", handler);

        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [text]);

    return <>Typed text: {text}</>
};