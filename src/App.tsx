import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncotrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {MySelect} from "./components/Select/MySelect";
import {Select} from "./components/Select/Select";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <MySelect/>
            <PageTitle title={"Training App"}/>
            <PageTitle title={"My Friends"}/>
            Article 1
            <UncontrolledAccordion titleValue={"Technologies"}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       items={[]}
                       onClick={()=>{}}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            Article 2
            <UncontrolledRating onChange={()=>{}}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={switchOn} onChange={(onOff) => {setSwitchOn(onOff)}}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
