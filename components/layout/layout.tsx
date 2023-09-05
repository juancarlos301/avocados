import React from 'react'
import { Navbar } from '../index'

type Props = {
  children: JSX.Element
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>this is a footer</footer>
    </div>
  )
}
