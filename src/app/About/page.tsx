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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolore
            similique voluptatem est iure recusandae provident laborum,
            molestias voluptates quod ipsum suscipit nihil illum illo vero
            cupiditate earum corrupti eaque. Dolorem provident, culpa unde
            veniam quam saepe iure debitis animi aut voluptate veritatis facere
            nam eius harum vero distinctio architecto rerum est quod nihil?
            Quisquam rem corrupti at numquam placeat assumenda nulla, neque,
            recusandae sit amet totam voluptas accusantium cumque dolore
            cupiditate ipsa illo expedita nostrum tenetur iure dolor porro.
            Soluta est ducimus, ea corporis accusantium id earum asperiores
            nulla, minus beatae dolore voluptatem, reprehenderit vero laboriosam
            esse labore doloribus facere! Placeat dignissimos possimus eligendi,
            repellat et eveniet corporis voluptatum necessitatibus suscipit odit
            natus, maiores quidem nihil dolor. Natus voluptates provident autem
            doloremque? Aliquid quibusdam facilis ad ipsa cumque id vel, labore
            accusamus reiciendis blanditiis illo rerum quam beatae neque? Minus
            voluptate aut iste libero delectus ipsa quasi maiores tempore!
          </p>
        </div>
      </div>
    </PageTransitionEffect>
  )
}

export default About
