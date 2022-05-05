import React from 'react'
import './nav.css'
const nav = () => {

  return (
    <div className='nav'>
        <div className='nav-w'>
            <div className=''>
                <h1> 
                    <a href="/">Elijah Busick </a>
                </h1>
            </div>
            <div className='nav-right'>
                <ul>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href='#skill'>Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                    <li>
                        <a href="#about">Resume</a>
                    </li>
                </ul>
            </div>
           
        </div>
    </div>
  )
}

export default nav