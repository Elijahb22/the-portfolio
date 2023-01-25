import React from 'react'
import './about.css'
import ME from '../../img/me.jpg'
const about = () => {
  return (
    <section className='about'> 
        <div className='about-left'> 
            <div className='about-left-wrapper'>
              <div className='my-div'>
                <img className="my-img"src={ME} alt=''/>
              </div>
                <h2 className='about-i'> Hello, my name is</h2>
                <h1 className='about-name'> Elijah Busick</h1>
                <p className=''>
                I recently graduated from the jump program where I study java to pursue my passion in the tech industry. I obtained my bachelors degree in marketing and sales where I developed my collaboration/team work skills. I also acquired a certification as a Full stack web developer where I advanced my skills in Javascript and MySQL. In tech, I know Java, MySQL, and Javascript. I strive to be a senior developer at a fortuned 500 company one day by using my knowledge in java and adaptability skills.
                </p>
            </div>
        </div>
    </section>
  )
}

export default about;