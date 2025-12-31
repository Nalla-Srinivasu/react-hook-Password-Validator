// Style your elements here
import styled from 'styled-components'

export const mainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-direction: center;
  background-color: #24263c;
  height: 100vh;
`

export const cardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #383a4e;
  height: 25vh;
`

export const cardTitle = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
export const cardDescription = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 20px;
`
export const alertMsg = styled.span`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 15px;
`

export const passwordInput = styled.input`
  border: none;
  width: 500px;
`
