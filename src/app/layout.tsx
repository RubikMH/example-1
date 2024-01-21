import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HomeContainer from '@/containers/HomeContaniner'
// import { Provider } from "react-redux";
import StoreProvider from './StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Example 01',
  description: 'Developed by RubikMH',
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className}
        h-screen p-4 relative bg-[#7EB5A6] text-[#86340A]  w-full`}
      >
        <StoreProvider>
          <HomeContainer>{children}</HomeContainer>
        </StoreProvider>
      </body>
    </html>
  )
}

export default RootLayout
