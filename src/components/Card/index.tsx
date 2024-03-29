import Image from 'next/image'
import React from 'react'
import Tag from '../Tag'

export interface InfoCard {
  createdAt: string
  name: string
  avatar: string
  image: string
  body: string
  title: string
  id: string
  tag: string
}
const Card = ({ info }: { info: InfoCard }) => {
  return (
    <div className="w-1/3 p-3 flex items-center  h-[522px]">
      <div className=" object-cover rounded-lg overflow-hidden shadow-lg">
        <Image
          className=""
          width={640}
          height={480}
          src={info.image}
          alt={info.title}
        />
        <div className="px-6 py-4">
          <div
            className="font-bold text-xl mb-2 
          overflow-hidden whitespace-nowrap "
          >
            {info.title}
          </div>
          <p
            className="text-[#C36839] text-ellipsis
           h-[100px] overflow-hidden text-base"
          >
            {info.body}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {info.tag.split(' ').map((item, index) => (
            <Tag key={index} text={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
