import Link from 'next/link'
import React from 'react'
import { FiActivity } from 'react-icons/fi'

const Logo = () => {
  return (
    <div>
      <Link href={'/'}>
        <div className="flex font-bold text-2xl items-center">
          RUBIK
          <span>
            <FiActivity color="#C36839" size={50} />
          </span>
          MH
        </div>
      </Link>
    </div>
  )
}

export default Logo
