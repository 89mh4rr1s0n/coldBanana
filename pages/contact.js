import React from 'react';
import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';

const contact = () => {
  return (<>
    <div className='bg-gradient-to-b from-gray-200 via-gray-200 to-white  pb-[300px]'>
      
        <Header/>
        
        <main className="max-w-screen-2xl mx-auto">
          <Banner/>
          <ContactForm/>
        </main>
        
    </div>
  </>)
};

export default contact;
