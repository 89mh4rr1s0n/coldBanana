import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Profile from '../components/Profile'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<>
      <div className='bg-gray-100 pb-10'>
        <Head>
          <title>Cold-Banana</title>
        </Head>
  
        <Header/>
  
      
          
            <main>
              <Banner/>
              
              
              
              <Profile/>
            </main>
          
        
  
      </div>
  </>)
}
