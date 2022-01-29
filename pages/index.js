import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Profile from '../components/Profile'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<>
      <div className='bg-gradient-to-b from-gray-200 via-gray-200 to-white  pb-[300px]'>
        <Head>
          <title>Cold-Banana</title>
        </Head>
  
        <Header/>

        <main className="max-w-screen-2xl mx-auto">
          <Banner/>
          <Profile/>
        </main>
          
        
  
      </div>
  </>)
}
