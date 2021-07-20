import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 5px;
  width: 100%;
  padding: 0 15px;
  box-shadow: 0 30px 35px #e5e5e5;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  & svg {
    margin-right: 4px;
    color: red;
    width: 23px;
    ${
      props => props.liked && css`
        color: red
        ${fadeIn()}`
    }
  }
`