import React from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import Challange from './components/Challange'
import JobFuse from './components/JobFuse'
import CardsContainer from './components/CardContainer'
import SpotLight from './components/SpotLight'
import Categories from './components/Categories'

import RecentCont from './components/RecentCont'
import How from './components/How'
import Counter from './components/Counter'
import Resume from './components/Resume'
import Review from './components/Review'
import Blog from './components/Blog'
import Footer from './components/Footer'
const page = () => {
  return (
    <div>
      <Header/>
      <Intro/>
      <Challange/>
      <JobFuse/>
      <CardsContainer/>
      <SpotLight/>
      <Categories/>
      <RecentCont/>
      <How/>
      <Counter/>
      <Resume/>
      <Review/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default page