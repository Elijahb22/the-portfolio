import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'

const footer = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <p>Desinged and Developed by Elijah Busick</p>
                </Col>
                <Col>
                    <p>Copyright 2022 EB</p>
                </Col>
                <Col>
                    <AiOutlineGithub />
                    <AiOutlineLinkedin />
                    <BsReverseLayoutTextSidebarReverse />
                </Col>
            </Row>
        </Container>
    )
}

export default footer