import React, {useState} from "react";

export default {
    title: "UseState demo"
}

function generateData() {
    // difficult counting
    console.log("generateData");
    return 1;
}

export const Example1 = () => {

    const [counter, setCounter] = useState(generateData);
    // Если useState в качестве инициализационного значения дать функцию, то useState вызовет её
    // единожды, а потом не будет вызывать (делая сложные вычисления внутри этой функции),
    // а будт просто смотреть и сравнивать новое (поступившее значение) с return'ом первого вызова
    // функции generateData

    const changer = (state: number) => {
        return state + 1
    };
    // changer это функция-изменитель. По этим правилам будет высчитываться значение, которое
    // засетается в стейт

    return (
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </>
    )
};

