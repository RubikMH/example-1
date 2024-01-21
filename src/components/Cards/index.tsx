import axios from 'axios'
import React from 'react'
import Card, { type InfoCard } from '../Card'

const Cards = async () => {
  const res = await axios.get(
    'https://64d78bfa2a017531bc1356ab.mockapi.io/my-blog',
  )

  return (
    <div className="flex flex-wrap items-stretch ">
      {res.data.map((item: InfoCard) => (
        <Card key={item.id} info={item} />
      ))}
    </div>
  )
}

export default Cards
