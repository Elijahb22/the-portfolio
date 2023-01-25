import React from 'react'
import './nav.css'
const nav = () => {

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <p class="navbar-brand fs-1">Elijah</p>
                <span class="navbar-toggler-icon"></span>
            <div class="nav-w" id="navbarNav">
                <ul class="navbar-nav fs-4">
                    <li class="nav-item text-dark">
                        <a class="nav-link active text-dark link-secondary" aria-current="page" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#skill">Skills</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link active" href="#contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#resume">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default nav