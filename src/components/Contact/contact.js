import React from 'react';
import { contactsData } from '../../data/contact-data'
import { 
    AiFillGithub,
    AiOutlinePhone,
    AiOutlineMail,
    AiFillLinkedin
} from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { Row, Container, Col } from 'react-bootstrap'
import './contact.css'
import { IconContext } from "react-icons";
const contact = () => {

    return (
        <section id='contact' className=''>
            <div className=''>
                <h1 className=''>
                    Get in touch
                </h1>
                <Container className="contact-div">
                    <Row>
                        <a href={`Cell: ${contactsData.cell}`}>
                            <Col>
                            <IconContext.Provider value={{ className:"ICONS"}}>
                                <AiOutlinePhone /> 
                            </IconContext.Provider>
                            </Col>
                            <Col>
                            <p> 
                                {contactsData.cell}
                            </p>
                            </Col>
                        </a>
                    </Row>
                    <Row>  
                        <a href={`Email: ${contactsData.email}`}>
                            <Col>
                            <IconContext.Provider value={{ className:"ICONS"}}>
                                <AiOutlineMail />
                            </IconContext.Provider>
                            </Col>
                            <Col>
                            <p>
                                {contactsData.email}
                            </p>
                            </Col>
                        </a>
                    </Row>
                    <Row>
                        <a>
                        <Col>
                            <IconContext.Provider value={{ className:"ICONS"}}>
                                <BiMap />
                            </IconContext.Provider>
                        </Col>
                        <Col>
                            <p>
                                {contactsData.Location}
                            </p>
                        </Col>
                        </a>
                    </Row>
                </Container>
          </div>
      </section>
    )
}

export default contact
  