import React from 'react';

const Profile = () => {
  return (<>
    <div className='relative w-4/5 md:3/4 lg:w-2/4 m-auto bg-white -mt-16 z-50 rounded-lg'>
        <div className='p-8 space-y-3 mb-10'>
            <h2 className='font-semibold text-center'>About Us</h2>
            <h2 className='font-semibold text-center'>Our Approach to Climate</h2>
            <p>
            Our approach to accelerating climate transition is focused on those areas 
            where We can have a material impact, including working with clients 
            to decarbonize their businesses and help drive progress towards net zero ambitions, 
            engaging partners and broader stakeholders for impactful innovation and collaboration, 
            and managing the Companies own climate related risks.
            </p>
            <p>We describe how we are leveraging the full breadth of our business to help drive 
            the low-carbon transition efforts of our clients through the development of new commercial
             capabilities and innovative climate solutions.
             </p>
            <p>We also acknowledge that in addition to opportunities, the impacts of climate change
             present risks that have the potential to impact our business in a variety of ways. We 
             are continuously assessing and managing the risks posed by climate change to our business 
             through proprietary models that leverage the latest science and industry best practices on stress testing, 
             and are further integrating climate into our firmwide business and risk practices more broadly.</p>
        </div>
    </div>
  </>)
};

export default Profile;
