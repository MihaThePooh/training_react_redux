import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}


function UncontrolledAccordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false); // пример работы с локальным стейтом через useState
    // тоже самое, только через useReducer. если локальных стейтов дофига, то лучше использовать useReducer.
    // в useReducer нужно передать непосредственно функцию-редьюсер, в которой описаны все инструкции
    // по изменению локального стейта и стартовое значение вторым параметром. useReducer так же возвращает массив.
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <div>
            {/*используя useState*/}
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {/*{!collapsed && <AccordionBody/>}*/}
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {props.onClick()}}>--- {props.title} ---</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion