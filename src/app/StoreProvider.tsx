'use client'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, type AppStore } from '../configs/store'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!storeRef.current) {
    storeRef.current = makeStore()
    // storeRef.current.dispatch(initializeCount(count));
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
