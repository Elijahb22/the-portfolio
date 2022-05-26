import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import './footer.css'
const footer = () => {
    return (
        <Container className='con-f'>
            <Row className='r-f'>
                <Col>
                    <p className='c-f'>Designed and Developed by Elijah Busick</p>
                </Col>
                <Col xs={4}>
                    <p className='c-f'>Copyright @ 2022 EB</p>
                </Col>
                <Col>
                    <a href="https://github.com/Elijahb22" alt="Github"><AiOutlineGithub className='icons-f'/> </a>
                    <a href="https://www.linkedin.com/in/elijah-busick-644487187/" alt="Linkedin"><AiOutlineLinkedin className='icons-f'/></a>
                    <a href='https://docs.google.com/document/d/1DZuejBSMMyzH2-ELE29exDj24cpNRsD-xFGISJRgM90/edit?usp=sharing' alt="Learning Plan"><BsReverseLayoutTextSidebarReverse className='icons-f' /></a>
                </Col>
            </Row>
        </Container>
    )
}

export default footer