import FormContact from '@/containers/FormContact'
import PageTransitionEffect from '@/containers/PageTransitionEffect'
import React from 'react'

const Contact = () => {
  return (
    <PageTransitionEffect>
      <div className="w-full relative h-full">
        <h2
          className="absolute transition-all top-2 text-center
         text-3xl font-bold animate-bounce"
        >
          Contact
        </h2>

        <FormContact />
      </div>
    </PageTransitionEffect>
  )
}

export default Contact
