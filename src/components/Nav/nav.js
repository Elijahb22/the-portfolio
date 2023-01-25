import React from 'react'
import './nav.css'
const nav = () => {

  return (
    <div className='nav'>
        <div className='nav-w'>
            <div className=''>
                <h1 className='nav-h1'> 
                    <a href="/" className='a-nav'>Elijah Busick </a>
                </h1>
            </div>
            <div className=''>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skill">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact">Contact Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#resume">Resume</a>
                    </li>
                </ul>
            </div>
           
        </div>
    </div>
  )
}

export default nav