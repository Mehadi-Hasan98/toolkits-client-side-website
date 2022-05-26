import React from 'react';
import {FaCar} from 'react-icons/fa';
import {BiSupport} from 'react-icons/bi';
import {GiKeyCard} from 'react-icons/gi';
import {GiWallet} from 'react-icons/gi';

const About = () => {
    return (
        <div>
            <h2 className='text-center mt-20 text-blue-700 font-mono text-3xl font-bold'>Services we Provide!</h2>
            <div className='flex mt-10 mb-32 font-mono'>
                <div className='mx-auto mb-4'>
                <h4 className='font-bold'><FaCar/>ALL BRANDS</h4>
                 <p>More than 100 brands</p>
                </div>
                <div className='mx-auto mb-4'>
                <h4 className='font-bold'><BiSupport/> FULL SUPPORT</h4>
                <p>Premium and 24/7</p>
                </div>
                <div className='mx-auto mb-4'>
                <h4 className='font-bold'><GiKeyCard/> DEALERSHIP</h4>
                <p>Single or multiple</p>
                </div>
                <div className='mx-auto mb-4'>
                <h4 className='font-bold'><GiWallet/> AFFORDABLE</h4>
                <p>Best suitable price</p>
                </div>
            </div>
        </div>
    );
};

export default About;