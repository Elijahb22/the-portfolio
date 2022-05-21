import React from 'react';
import { contactsData } from '../../data/contact-data'
import { 
    AiFillGithub,
    AiOutlinePhone,
    AiOutlineMail,
    AiFillLinkedin
} from 'react-icons/ai'
import { Stack } from 'react-bootstrap'
const contact = () => {

    return (
      <section id='contact' className=''>
          <div className=''>
              <h1 className=''>
                  Get in touch
              </h1>
              <Stack gap={0}>
                <div className="contact-div">
                    <a href={`Cell: ${contactsData.cell}`}>
                      <AiOutlinePhone /> 
                      <p> {contactsData.cell}</p>
                    </a>
                </div>
                <div className="bg-light border">
                    <a href={`Email: ${contactsData.email}`}>
                        <AiOutlineMail />
                        <p>
                            {contactsData.email}
                        </p>
                    </a>
                </div>
                <div className="bg-light border">
                    <a href="https://github.com/Elijahb22">
                      <AiFillGithub />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/elijah-busick-644487187/">
                        <AiFillLinkedin />
                    </a>
                </div>
              </Stack>
          </div>
      </section>
    )
}

export default contact
  