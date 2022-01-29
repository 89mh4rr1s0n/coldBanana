import React from 'react';

const ContactForm = () => {
  return (<>
    <div className='relative w-4/5 md:3/4 lg:w-2/4 m-auto bg-white -mt-16 z-50 rounded-lg'>
        <div className='p-8 space-y-3 mb-10'>
            <h2 className='font-semibold text-center'>Have a Question for us?</h2>
            <h2 className='font-semibold text-center'>Please fill out the form below</h2>
            
            <form className='w-full'>
                <div className='space-y-5 mt-5'>
                    <div className='myscreen1:flex'>
                        <label className='w-[80px] text-right pr-5'>Name:</label>
                        <input className='input' type="text"></input>
                    </div>
                
                    <div className='myscreen1:flex'>
                        <label className='w-[80px] text-right pr-5'>City:</label>
                        <input className='input' type="text"></input>
                    </div>
                    <div className='myscreen1:flex'>
                        <label className='w-[80px] text-right pr-5'>Email:</label>
                        <input className='input' type="email"></input>
                    </div>
                    <div className='myscreen1:flex'>
                        <label className='w-[80px] text-right pr-5'>Message:</label>
                        <textarea className='h-28 input' type="text"></textarea>
                    </div>
                </div>
                <div className='flex'>
                    <button className='submit hover:shadow-md 
                    active:scale-95 transition duration-100'>Send</button>
                </div>
            </form>
        </div>
    </div>
  </>)
};

export default ContactForm;
