import React from 'react';
import techBlog from './assets/techBlog.png'
import JATE from './assets/JATE.png'
import weatherDash from './assets/weatherDash.png'
import placeHolder from './assets/placeholder.png'
import practiceRoom from './assets/practiceRoom.png'
import noteTaker from './assets/noteTaker.png'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
  return (
    <div className="indigo">
      <div className="container mt-1">
        <div class="row">
          <div className="col-md-auto" id="projectCards">
            <h5 className="cardHeader">
              <a id="link" href="https://peaceful-reaches-79315.herokuapp.com/">Tech Blog</a>
              <a href="https://github.com/pasfrad/Tech-blog">
                <GitHubIcon fontSize="large" color="action" id="gitIcon"/>
              </a>
            </h5>
            <a href="https://github.com/pasfrad/Tech-blog">
            <img src={techBlog} class="img" alt="tech blog project"></img>
            </a>
          </div>

          <div className="col-md-auto" id="projectCards">
            <h5 className="cardHeader">
              <a id="link" href="https://mighty-citadel-27783.herokuapp.com/">Just Another Text Editor</a>
              <a href="https://github.com/pasfrad/Just-Another-Text-Editor">
                <GitHubIcon fontSize="large" color="action" id="gitIcon"/>
              </a>
            </h5>
            <a href="https://github.com/pasfrad/Just-Another-Text-Editor">
            <img src={JATE} class="img" alt="JATE project"></img>
            </a>
          </div>

          <div className="col-md-auto" id="projectCards">
            <h5 className="cardHeader">
              <a id="link" href="https://pasfrad.github.io/Weather-Dashboard/">Weather Dashboard</a>
              <a href="https://github.com/pasfrad/Weather-Dashboard">
                <GitHubIcon fontSize="large" color="action" id="gitIcon"/>
              </a>
            </h5>
            <a href="https://github.com/pasfrad/Weather-Dashboard">
            <img src={weatherDash} class="img" alt="weather dashboard project"></img>
            </a>
          </div>

          {/* replace here */}
          <div className="col-md-auto" id="projectCards">
            <h5 className="cardHeader">
              <a id="link" href="https://github.com/pasfrad/Socially-Networking">Socially Networking</a>
              <a href="https://github.com/pasfrad/Socially-Networking">
                <GitHubIcon fontSize="large" color="action" id="gitIcon"/>
              </a>
            </h5>
            <a href="https://github.com/pasfrad/Socially-Networking">
            <img src={placeHolder} class="img" alt="social network project"></img>
            </a>
          </div>

          <div className="col-md-auto" id="projectCards">
            <h5 className="cardHeader">
              <a id="link" href="https://immense-savannah-04794.herokuapp.com/">Practice Room</a>
              <a href="https://github.com/pasfrad/PracticeRoom">
                <GitHubIcon fontSize="large" color="action" id="gitIcon"/>
              </a>
            </h5>
            <a href="https://github.com/pasfrad/PracticeRoom">
            <img src={practiceRoom} class="img" alt="practice room project"></img>
            </a>
          </div>

          <div className="col-md-auto" id="projectCards">
            <h5 className="cardHeader">
              <a id="link" href="https://rh-note-taker.herokuapp.com/notes">Note Taker</a>
              <a href="https://github.com/pasfrad/Note-Taker">
                <GitHubIcon fontSize="large" color="action" id="gitIcon"/>
              </a>
            </h5>
            <a href="https://github.com/pasfrad/Note-Taker">
            <img src={noteTaker} class="img" alt="note taker project"></img>
            </a>
          </div>

        </div>
        <div id="padder"></div>
      </div>

    </div>
  );
}