import Cards from '@/components/Cards'
import PageTransitionEffect from '@/containers/PageTransitionEffect'
import Space from '@/containers/Space'
import React from 'react'

const Blog = () => {
  return (
    <PageTransitionEffect>
      <div className="w-full h-full">
        <h2 className="text-center text-3xl font-bold">Blogs</h2>
        <Space />
        <hr className="border-none w-full h-0.5 bg-[#86340A] rounded-lg" />
        <Space />
        <Cards />
      </div>
    </PageTransitionEffect>
  )
}

export default Blog
