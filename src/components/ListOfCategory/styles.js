import styled, { css, keyframes } from 'styled-components'

const bounceDownKeyFrames = keyframes`
 0% {
    top: -70px;
  }

  25% {
    top: 0px;
  }

  40%{
    top: 10px
  }

  65%{
    top: -3px
  }

  100% {
    top: 0px;
  }
`

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${bounceDownKeyFrames} ${type};
  `

export const List = styled.ul`
    display: flex;
    overflow-x: scroll;
    width: 100%;
    margin-bottom: 8%;
    &::-webkit-scrollbar {
    display: none}
    ${props => props.fixed && css`
    
    background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0,0,0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -15px;
        transform: scale(.5);
        z-index: 1;
        ${bounceDown()}
    
    
    `}
   
  

`

export const Item = styled.li`
    padding: 0 8px;
`
