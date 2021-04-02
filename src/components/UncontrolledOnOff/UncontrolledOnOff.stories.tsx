import React, {useState} from "react";
import { action } from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: "UncontrolledOnOff",
    component: UncontrolledOnOff
}

const callback = action("want to change")

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const BugMode = () => <div>BugMode</div>