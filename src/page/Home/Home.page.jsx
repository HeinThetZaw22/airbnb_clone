import React from 'react'
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import NavSpacer from '../../components/NavSpacer'

const HomePage = () => {
  return (
    <div className=' h-[200vh]'>
        <div className=''>
            <Navbar />
            <NavSpacer />
            <SearchBar />
        </div>
    </div>
  )
}

export default HomePage