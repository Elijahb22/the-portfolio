import React from 'react'
import './nav.css'
const nav = () => {

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <p class="navbar-brand fs-1" href="#">Elijah</p>
                <span class="navbar-toggler-icon"></span>
            <div class="nav-w" id="navbarNav">
                <ul class="navbar-nav fs-4">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skill">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#resume">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default nav