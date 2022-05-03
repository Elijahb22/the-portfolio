import React from 'react'
import Portfolio from "../Portfolio/Portfolio.js"
import { portfolio } from '../../data'

const PortfolioList = () => {
  return (
    <section id='portfolio' className=''>
      <div className=''>
        <h1 className=''> Portfolio</h1>
        {/* <p className='pl-desc'> Write description about portfolio</p> */}
      </div>
      <div className=''>
        {portfolio.map((item) => (
            <Portfolio key={item.id} name={item.name} img={item.img} link={item.link}/>
        ))}
      </div>
    </section>
  )
}

export default PortfolioList