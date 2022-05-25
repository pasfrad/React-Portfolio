import React from 'react';
import profilePic from './assets/profilePic.png'

export default function About() {
  return (
    <div id="aboutMargin">
      <div className="container mt-1">
        <div class="row">
          <div className="col-md-7 mt-5">
            <div id='aboutContainer'>About Me</div>
            <div id='aboutContainer' className='container'>
              Hello! I am a web developer native to New Hampshire. As a driven and dedicated optimist, I love to puzzle out complex problems and build unique things from scratch.
            </div>
            <div id='aboutContainer' className='container'>
              I have a musical background, with many years spent playing the violin. I am an avid reader, and spend the rest of my time outdoors gardening or hiking.
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <img src={profilePic} class="img" id='profilePic' alt="headshot of me"></img>
          </div>
        </div>
      </div>
    </div>
  )
}