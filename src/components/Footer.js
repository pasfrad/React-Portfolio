import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

export default function Footer() {
    return (
        <div className='footer'>
          <GitHubIcon fontSize="large" color="action" id="footerIcon"/>
          <LinkedInIcon fontSize="large" color="action" id="footerIcon"/>
          <MailIcon fontSize="large" color="action" id="footerIcon"/>
        </div>
    );
 }