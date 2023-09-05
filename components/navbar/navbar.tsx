import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">HOME</Link>
      <Link href="/product/1">product one</Link>
    </nav>
  )
}
