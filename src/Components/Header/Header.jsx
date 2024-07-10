import React from 'react';
import bannerImage from '../../assets/All Images/P3OLGJ1 copy 1.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='md:flex items-center mb-12 px-6'>
                <div className="header-details md:w-3/5 tracking-wider ">
                    <h1 className='text-7xl w-auto md:w-5/6 text-white'>
                        One Step Closer  To Your <span className='custom-text text-7xl'>Dream Job</span>
                    </h1>
                    <p className='w-auto md:w-5/6 mt-6 leading-relaxed text-white'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                   <Link to="/jobs">
                    <button className='custom-btn mt-4 transform transition-transform duration-300 hover:scale-105' 
                    // style={{ color: 'white' }}
                    >Get Started</button>
                    </Link>
                </div>
                <div className="image-section md:w-1/2">
                    <img src={bannerImage} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Header;