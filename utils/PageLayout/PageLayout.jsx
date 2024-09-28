import React from 'react'
import Header from '../Header/Header'

export const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
