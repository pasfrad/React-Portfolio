import React from 'react';
import profilePic from './images/profilePic.png'

export default function About() {
  return (
    <div>
      <div id="aboutMargin"></div>
      <div className="container row">
        <div className="col-md-7">
          <div id='aboutContainer' className='container'>
            Hello! I am a web developer native to New Hampshire. As a driven and dedicated optimist, I love to puzzle out complex problems and build unique things from scratch.
          </div>
          <div id='aboutContainer' className='container'>
            I have a musical background, with many years spent playing the violin. I am an avid reader, and spend the rest of my time outdoors gardening or hiking.
          </div>
        </div>
        <div className="col-md-4">
          <img src={profilePic} class="img" alt="headshot of me"></img>
        </div>
      </div>
    </div>
  );
}