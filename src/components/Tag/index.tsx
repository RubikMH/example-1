import React from 'react'

const Tag = ({ text }: { text: string }) => {
  return (
    <span
      className="inline-block bg-gray-200 rounded-full px-3 py-1 
     font-semibold text-gray-700 mr-2 mb-2 text-sm "
    >
      #{text}
    </span>
  )
}

export default Tag
