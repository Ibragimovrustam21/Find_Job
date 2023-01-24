import React from 'react'
import { WelcomerBanner } from '../../components/WelcomerBanner/WelcomerBanner'
import image1 from '../../assets/img1.png'
import { BrandBanner } from '../../components/BrandBanner/BrandBanner'
import { Category } from '../../components/Category/Category'
import { FeatureJobs } from '../../components/FeatureJobs/FeatureJobs'
import './home.scss'
import { Carousel } from '../../components/Carousel/Carousel'
import { WorkingProcess } from '../../components/WorkingProcess/WorkingProcess'

export const Home = () => {
  return (
    <>
      <WelcomerBanner
        img={image1}
        title={'Find Exciting Jobs Today.'}
        text={'Get the most exciting part time jobs from the best cities of Europe and UAE.'}
      />
      <BrandBanner />
      <Category />
      <FeatureJobs />
      <WorkingProcess />
      <Carousel />
    </>
  )
}
