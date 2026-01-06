// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  CardTitle,
  CardDescription,
  PasswordInput,
  AlertMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePwd = event => {
    setPassword(event.target.value)
  }
  return (
    <MainContainer>
      <CardContainer>
        <CardTitle>Password Validator</CardTitle>
        <CardDescription>
          Check how strong and secure is your password
        </CardDescription>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePwd}
        />
        {password.length < 8 && (
          <AlertMsg>Your password must be at least 8 characters</AlertMsg>
        )}
      </CardContainer>
    </MainContainer>
  )
}

export default PasswordValidator
