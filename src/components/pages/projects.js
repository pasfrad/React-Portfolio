import React from 'react';
import techBlog from './images/techBlog.png'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
  return (
    <div>
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
              <a id="link" href="https://peaceful-reaches-79315.herokuapp.com/">Tech Blog</a>
              <a href="https://github.com/pasfrad/Tech-blog">
                <GitHubIcon fontSize="large" color="action" id="gitIcon"/>
              </a>
            </h5>
            <a href="https://github.com/pasfrad/Tech-blog">
            <img src={techBlog} class="img" alt="tech blog project"></img>
            </a>
          </div>
          
        </div>
        <div id="padder"></div>
      </div>

    </div>
  );
}