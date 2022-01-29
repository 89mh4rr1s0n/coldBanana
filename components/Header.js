import React from 'react';
import { useRouter } from 'next/router';

const Header = () => {

  const router = useRouter()

  return (<>
    <header className='sticky top-0 z-50'>
        <div className='flex items-center justify-between p-3 bg-gray-50'>
            {/* left */}
            <h1 
            className='p-2 cursor-pointer'
            onClick={() => router.push("/")}
            >South Western Renewables</h1>

            {/* right */}
            <div className='flex space-x-4'>
                <p 
                className={router.pathname == "/" ? "button border-b-lime-600" : " button"}
                onClick={() => router.push("/")}
                >
                    Home
                </p>
                <p 
                className={router.pathname == "/contact" ? "button border-b-lime-600" : " button"}
                onClick={() => router.push("contact")}
                >
                    Contact
                </p>
            </div>
        </div>
    </header>
  </>)
};

export default Header;
