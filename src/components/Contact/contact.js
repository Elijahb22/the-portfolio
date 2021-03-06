import React from 'react';
import { contactsData } from '../../data/contact-data'
import  myResume  from '../../img/Elijah Busick.pdf'
import  Button  from 'react-bootstrap/Button'
import { 
    AiOutlinePhone,
    AiOutlineMail
} from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { Row, Container, Col } from 'react-bootstrap'
import './contact.css'
const contact = () => {
    
    return (
        <Container id="contact">
            <h2 className='cea'>Get In Touch</h2>
            <Row className='c-div'>
                <Col>
                    <a className="a-c" href={`Cell: ${contactsData.cell}`}>                              
                    <AiOutlinePhone className='icons'/> 
                    <p> 
                        {contactsData.cell}
                    </p>
                    </a>
                </Col>
                <Col>
                    <a className="a-c" href={`Email: ${contactsData.email}`}>
                    <AiOutlineMail className='icons'/> 
                    <p> 
                        {contactsData.email}
                    </p>
                    </a>
                </Col>
                <Col>
                    <a className="a-c" href={`Location: ${contactsData.Location}`}>
                    <BiMap className='icons' />
                    <p>
                        {contactsData.Location}
                    </p>
                    </a>
                </Col>
            </Row>
                <Button id="resume" href={myResume} target="_blank" variant="primary" className='c-button'>Resume</Button>
        </Container>
    )
}

export default contact
  