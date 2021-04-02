import React, {useState} from "react";
import {ChoosedOption} from "./ChoosedOption";
import {Options} from "./Options";

export type MyItemType = {
    my_id: number
    my_title: string
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: MyItemType[]
}

export function MySelect(props: any) {

    const [collapsed, setCollapsed] = useState(false)
    const [title, setTitle] = useState("Choose option")

    const items = [
        {my_id: 1, my_title: "Пункт 1"},
        {my_id: 2, my_title: "Пункт 2"},
        {my_id: 3, my_title: "Пункт 3"},
    ]

    return (
        <div>
            <ChoosedOption title={title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            { collapsed ? <Options items={items} setTitle={setTitle}/> : ""}
        </div>
    )
}
