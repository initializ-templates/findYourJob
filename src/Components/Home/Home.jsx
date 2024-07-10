import React from 'react';
import Header from '../Header/Header';
import JobSection from '../JobSection/JobSection';
import JobCategory from '../JobCategory/JobCategory';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const Home = () => {
    const category = useLoaderData();
    useTitle('Home')
    
    return (
        <div className='pt-10 px-10'>
            <Header />
            <JobCategory category={category} 
            />
            <JobSection />
        </div>
    );
};

export default Home;