import React, { type ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children: ReactNode | ReactNode[]
}
const HomeContainer = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="w-full h-[80%]  max-w-6xl mx-auto">{children}</main>
      <Footer />
    </>
  )
}

export default HomeContainer
