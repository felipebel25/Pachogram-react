import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
    color: #a52658;
    font-weight: 500;
    font-size: 17px;
    text-decoration: none;

`
export const Form = styled.form`
 display: flex;
 flex-direction: column;
 height: 100vh;
`
export const Input = styled.input`
 margin: 0 auto;
 width: 84%;
 height: 6vh;
 margin-bottom:6.6%;
 &::placeholder {
     padding-left:2%;
    font-weight: 400;
}

`
export const Img = styled.img`
margin: 0 auto;
width: 50%;
margin-bottom: 15%;
border-radius: 5%;
`
export const Text = styled.p`
    text-align: center;
    margin-bottom: 4%;

`

export const Button = styled.button`
    margin: 0 auto;
    height:6.4vh ;
    width: 84%;
    border-radius: 2.5% ;
    background-color: #a52658;
    margin-bottom: 6%;
    color: #fff;
    font-size: 18px;
    font-weight: 500;

`
