
import React from "react";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb
} from "react-icons/di";
import './skills.css'
const skill = () => {

    return (
    <div className="row">
        <card>
            <DiJavascript1 />
        </card>
        <card>
            <DiReact />
        </card>
        <card>
            <DiNodejs />
        </card>
        <card>
            <DiMongodb />
        </card>
    </div>
    )
}

export default skill;