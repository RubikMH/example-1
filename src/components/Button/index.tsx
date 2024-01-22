import React, { type ReactNode } from 'react'

interface Props {
  children: string | ReactNode
  primary?: boolean
  type?: string
}
const Button = ({ children, type = 'button', primary = false }: Props) => {
  return (
    <div className="w-full h-10">
      <button
        type={type === 'button' ? 'button' : 'submit'}
        className={`w-full h-full rounded-md ${
          primary ? 'bg-[#C36839] text-[#E8D0B3]' : 'bg-[#E8D0B3]'
        }`}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
