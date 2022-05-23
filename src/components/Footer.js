import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

export default function Footer() {
    return (
        <div className='footer'>
            <a href="https://github.com/pasfrad/">
                <GitHubIcon fontSize="large" color="action" id="footerIcon" />
            </a>
            <a href="https://www.linkedin.com/in/reese-hartnett-702315227/?original_referer=">
            <LinkedInIcon fontSize="large" color="action" id="footerIcon" />
            </a>
            <a href="mailto:rd.hart@outlook.com">
            <MailIcon fontSize="large" color="action" id="footerIcon" />
            </a>
        </div>
    );
}