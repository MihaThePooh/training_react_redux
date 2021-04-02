import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {MySelect} from "./MySelect";

export default {
    title: "Select",
    component: Select,
};

export const My_Select = () => <MySelect/>

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return <Select onChange={setValue}
                   value={value}
                   items={[
                       {value: "1", title: "Minsk"},
                       {value: "2", title: "Moscow"},
                       {value: "3", title: "Kiev"},]
                   }/>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <Select onChange={setValue}
                   value={value}
                   items={[
                       {value: "1", title: "Minsk"},
                       {value: "2", title: "Moscow"},
                       {value: "3", title: "Kiev"},]
                   }/>
}

