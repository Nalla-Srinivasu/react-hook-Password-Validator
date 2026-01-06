// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  height: 350px;
  width: 250px;
  padding: 25px;
  border-radius: 10px;

  @media screen and (max-width: 576px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 300px;
  }
`

export const CardTitle = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: bolder;
  text-align: center;
  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`
export const CardDescription = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 15px;
  padding-bottom: 25px;
  text-align: center;
`
export const AlertMsg = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 15px;
  padding-top: 10px;
  text-align: center;
`

export const PasswordInput = styled.input`
  border: none;
  width: 300px;
  height: 30px;
  padding: 10px;
  border-radius: 1px;
  @media screen and (max-width: 576px) {
    width: 250px;
  }
`
