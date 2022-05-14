
import React from "react";
import { Col, Container, Row } from "react-bootstrap"; 
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiCss3
} from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai"
import { 
    SiMysql,
    SiExpress,
    SiHeroku,
    SiVisualstudiocode,
    SiInsomnia
} from "react-icons/si"
import { FiFigma } from "react-icons/fi"
import './skills.css'
import { IconContext } from "react-icons";
const skill = () => {
    return (
    <div className="">
    <Container>
    <h2 className="h1-s"> Professional Skillset </h2>
    <Row>
        <Col className="tech-icons">
            <DiJavascript1 />
        </Col>
        <Col className="tech-icons">
            <DiReact alt />
        </Col>
        <Col className="tech-icons">
            <DiNodejs />
        </Col>
        <Col className="tech-icons">
            <DiMongodb />
        </Col>
    </ Row>
    <Row>
        <Col className="tech-icons">
            <IconContext.Provider value={{ className:"html-icon"}}>
            <AiFillHtml5 />
            </IconContext.Provider>
        </Col> 
        <Col className="tech-icons">
            <DiCss3 />
        </Col>
        <Col className="tech-icons">
            <SiMysql />
        </Col>
        <Col className="tech-icons">
            <SiExpress />
        </Col>
    </Row>
    <h2 className="h1-s">Tools Used</h2>
    <Row>
        <Col className="tech-icons">
            <SiHeroku />
        </Col>
        <Col className="tech-icons">
            <FiFigma />
        </Col>
        <Col className="tech-icons">
            <SiVisualstudiocode />
        </Col>
        <Col className="tech-icons">
            <SiInsomnia />
        </Col>
    </Row>
    </Container>
    </div>
    )
}

export default skill;