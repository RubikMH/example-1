import React from 'react'
import photo from '../../../public/my_photo.png'
import Image from 'next/image'

import PageTransitionEffect from '@/containers/PageTransitionEffect'

const About = () => {
  return (
    <PageTransitionEffect>
      <div className="w-full flex items-center justify-between h-full">
        <div className="w-1/2 ">
          <Image className="rounded-md" src={photo} alt="my photo" />
        </div>
        <div className="w-1/2 p-4">
          <p className="text-justify leading-8">
            Hi 👋 my name is Mohamad Hasan but people call me MH. I was born in
            Tehran on The 13th of July 2004. I’ve learned programming since I
            was 13 years old but I started as Professional web developer in 2020
            and my brother always pushes me for developing my skills. I’m really
            keen on programming and coding and trying to find solution for any
            mistakes. I feel good for all the courses that I have past to
            develop myself . MH
          </p>
        </div>
      </div>
    </PageTransitionEffect>
  )
}

export default About
