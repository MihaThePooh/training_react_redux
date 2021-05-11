import React, {useEffect, useState} from "react";

export default {
    title: "UseEffect demo"
}

export const Example1 = () => {

    const [counter, setCounter] = useState(1);

    // !!!!! сначала проиходит отрисовка jsx, а потом уже всё, что написано в useEffect'e !!!!!
    // useEffect это НUС для сайд эффектов, таких как:
    // api.getUsers().then('') - запросы на сервак
    // setInterval - установка интервалов
    // indexDB - работа с базой данных
    // document.getElementById - редко, но иногда надо
    // document.title = "User" - какие-то прямые изменения документа, т.е. не через реакт а на прямую
    useEffect(() => {
        document.title = counter.toString()
    });
    // при отсутствии зависимостей, то useEffect срабатывает при каждой перерисовке.
    // при пустой зависимости [], useEffect сработает 1 раз, сразу после отрисовки компоненты.
    // при указании зависимости [counter], useEffect будет срабатывать каждый раз, когда counter изменится.

    return (
        <>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
};

