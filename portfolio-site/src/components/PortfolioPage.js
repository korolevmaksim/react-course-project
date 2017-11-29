import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>My work</h1>
        <p>Checkout the staff I've done:</p>
        <Link to="/portfolio/1234">First portfolio</Link>
        <Link to="/portfolio/Portfolio">Second portfolio</Link>
    </div>
);

export default PortfolioPage;