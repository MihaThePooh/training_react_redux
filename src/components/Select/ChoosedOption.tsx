import React, {Dispatch, SetStateAction} from "react";

type ChoosedOptionPropsType = {
    title: string
    setCollapsed: Dispatch<SetStateAction<boolean>>
    collapsed: boolean
}

export const ChoosedOption = (props: ChoosedOptionPropsType) => {
    return (
        <div onClick={()=>{props.setCollapsed(!props.collapsed)}}>
            {props.title}
        </div>
    )
}