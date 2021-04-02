import React, {Dispatch, SetStateAction, useState} from "react";
import {MyItemType} from "./MySelect";

type OptionsPropsType = {
    items: MyItemType[]
    setTitle: Dispatch<SetStateAction<string>>
}

export const Options = (props: OptionsPropsType) => {

    const [optionCollapsed, setOptionCollapsed] = useState(true)

    const onClickHandler = (id: number) => {
        const setThisTitle = props.items.find(it => it.my_id === id)
        if (setThisTitle) {
            props.setTitle(setThisTitle.my_title)

        }
        setOptionCollapsed(false)
    }


    return (
        <div>{ optionCollapsed ? props.items.map(i => <div onClick={()=>{onClickHandler(i.my_id)}}>
            {i.my_title}</div>) : ""}
        </div>
    )
}