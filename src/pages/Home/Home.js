import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Describe from '../../components/works/works'
import Stream from '../../components/works/stream'
import Followers from '../../components/works/users'
import Forms from '../../components/works/form'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/works/cards'

const Home = () => {

  return (
    <div className="w-full p-2">
       <Header />
       <Describe />
       <Stream />
       <Followers />
       <Cards />
       <Forms />
       <Footer />
    </div>
  )
}

export default Home