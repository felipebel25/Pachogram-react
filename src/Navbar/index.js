import React from 'react'
import { Nav, Link } from './style'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
const Navbar = () => {
  const SIZE = 42
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Link to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
      <Link to='/user'><MdPersonOutline size={SIZE} /></Link>

    </Nav>
  )
}

export default Navbar
