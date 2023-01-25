import React from 'react'
import './nav.css'
const nav = () => {

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Elijah</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="nav-w" id="navbarNav">
                <ul class="navbar-nav fs-2">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skill">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact Me</a>
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