
import React from 'react'
import './portfolio.css'
const portfolio = ({img,link}) => {
  return (
    <section className='portfolio'> 
        <div className='portfolio-b'>
            <div className='portfolio-c'></div>
            <div className='portfolio-c'></div>
            <div className='portfolio-c'></div>
        </div>
        <a href={link} target="_blank" 
        rel="noreferrer">
            <img src={img} alt=" " className=''/>
        </a>
    </section>
  )
}

export default portfolio