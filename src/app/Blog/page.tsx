import Cards from '@/components/Cards'
import PageTransitionEffect from '@/containers/PageTransitionEffect'
import React from 'react'

const Blog = () => {
  return (
    <PageTransitionEffect>
      <div className="w-full h-full">
        <Cards />
      </div>
    </PageTransitionEffect>
  )
}

export default Blog
