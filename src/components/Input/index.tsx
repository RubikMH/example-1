import React, { type ChangeEventHandler, type FocusEventHandler } from 'react'

interface Props {
  type: string
  onChange: ChangeEventHandler
  onBlur: FocusEventHandler<HTMLInputElement>
  value: string
  name: string
}
const Input = (props: Props) => {
  return (
    <div className="w-full">
      <input
        className="bg-[#E8D0B3] border border-gray-300 
         text-sm rounded-lg block w-full p-2.5 "
        {...props}
      />
    </div>
  )
}

export default Input
