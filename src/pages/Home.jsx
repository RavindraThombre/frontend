import React from 'react'
import Header from '../components/Header'
import TopStores from '../components/TopStores'
import Banner from '../components/Banner'

const Home = () => {
    return (
        <div className='mt-2'>
            <Header />
            <TopStores />
            <Banner />
        </div>
    )
}

export default Home