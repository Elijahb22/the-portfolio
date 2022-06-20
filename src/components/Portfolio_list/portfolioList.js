import React from 'react'
import './portfolioList.css'
import Portfolio from "../Portfolio/portfolio.js"
import { portfolio } from '../../data/img.js'

const PortfolioList = () => {
  return (
    <section id='portfolio' className='portfolioList'>
      <div className='portfolioList-texts'>
        <h2 className='portfolioList-title'> Projects</h2>
      </div>
      <div className='portfolioList-list'>
        {portfolio.map((item) => (
            <Portfolio key={item.id} name={item.name} img={item.img} link={item.link}/>
        ))}
      </div>
    </section>
  )
}

export default PortfolioList