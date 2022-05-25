import React, { useState } from 'react';
import About from './pages/aboutMe';
import Contact from './pages/contactMe';
import Projects from './pages/projects';
// import Resume from './pages/resume';
import Navbar from './Navbar'
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'Contact':
                return <Contact />;
            case 'Projects':
                return <Projects />;
            // case 'Resume':
            //     return <Resume />;
            default:
                return <About />;
        };
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
            <Footer />
        </div>
    );
}