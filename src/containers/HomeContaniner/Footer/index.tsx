import React from 'react'
import { FaCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="h-[10%]  w-full">
      <div className="w-full flex gap-2 justify-center items-center h-full">
        <p>Developed by RubikMH</p>
        <FaCopyright className="block" />
      </div>
    </footer>
  )
}

export default Footer
