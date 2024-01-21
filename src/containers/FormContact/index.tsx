import Image from 'next/image'
import React from 'react'
import contactImage from '../../../public/undraw_content_re_33px.svg'
import MyForm from '@/components/MyForm'

const FormContact = () => {
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-1/2">
        <Image src={contactImage} alt="contact image" />
      </div>
      <div className="w-1/2">
        <MyForm />
      </div>
    </div>
  )
}

export default FormContact
