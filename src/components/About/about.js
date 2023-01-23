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
                I am a recent JUMP graduate pursuing a Java Development career, looking to combine nearly 18 months of industry equivalence experience with a strong digital mindset to become a valued asset to your organization.
                </p>
            </div>
        </div>
    </section>
  )
}

export default about;