import { Input } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'

const Search = () => {
  return (
    <div>
      <Inputs size='large' type='text' placeholder='Capu' prefix={<FiSearch />} />
    </div>
  )
}

export default Search

export const Inputs = styled(Input)`
  border-radius: 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
