import React from 'react'
import styled from 'styled-components'
import { FiShoppingCart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

const Card = () => {
  return (
    <Container>
      <Cover>
        <Rating>
          <p>2.4</p>
          <AiFillStar />
        </Rating>
        <img src='/images/matcha.jpg' alt='cafe' width={400} height={400} />
      </Cover>
      <Detail>
        <section>
          <h3>Vanilla</h3>
          <h3>21 K</h3>
        </section>
        <section>
          <div>
            <button>Hot</button>
            <button>Cold</button>
          </div>
          <div>
            <FiShoppingCart />
          </div>
        </section>
      </Detail>
    </Container>
  )
}

export default Card

export const Container = styled.div`
  width: 340px;
  height: 100%;
  padding: 1rem;
  background: white;
  border: 8px solid rgba(214, 237, 254, 0.5);
  border-radius: 1rem;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
`

export const Rating = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  padding: 4px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  background: white;
  border: 4px solid rgba(0, 0, 0, 0.067);
  border-radius: 30px;
`

export const Cover = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 1rem;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.2rem;

  section:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #1f4397;
  }

  section:last-child {
    display: flex;
    justify-content: space-between;

    div:first-child {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      button {
        height: 30px;
        padding: 0 1rem;
        background-color: rgba(255, 255, 255);
        color: #7e8ca7;
        border: 2px solid #7e8ca7;
        border-radius: 10px;
        font-weight: bold;
      }
    }

    div:last-child {
      width: 40px;
      height: 40px;
      background-color: #49c7ed;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
    }
  }
`
