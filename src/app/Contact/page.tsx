import FormContact from '@/containers/FormContact'
import PageTransitionEffect from '@/containers/PageTransitionEffect'
import React from 'react'

const Contact = () => {
  return (
    <PageTransitionEffect>
      <div className="w-full h-full">
        <FormContact />
      </div>
    </PageTransitionEffect>
  )
}

export default Contact
