import React from 'react'
import './nav.css'
const nav = () => {

  return (
    <div className='nav'>
         <div className='nav-w'> 
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Elijah</span>
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
           </nav>
        </div> 
  </div>
  )
}

export default nav