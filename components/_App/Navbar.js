import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import Search from '../Search'
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
    <Nav>
      <div>
        <Link href='/'>
          <img src='/images/logo-idev-cafe.png' alt='logo' width={100} />
        </Link>
      </div>
      <Menu>
        <ul>
          <li>
            <Link href='about-us'>
              About us
            </Link>
          </li>
          <li>
            <Link href='our-product'>
              Our Product
            </Link>
          </li>
          <li>
            <Link href='delivery'>
              Delivery
            </Link>
          </li>
        </ul>
      </Menu>
      <SearchMenu>
        <Search />
        <FiShoppingCart />
      </SearchMenu>
    </Nav>
  )
}

export default Navbar

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2e3840;
  background: initial;
  padding: 1rem 5rem;
`

export const SearchMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const Menu = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    gap: 2em;

    li {
      color: ${({ active }) => active ? 'blue' : 'inherit'}
    }
  }
`