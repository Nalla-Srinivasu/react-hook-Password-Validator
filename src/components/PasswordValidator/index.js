// Write your code here
import {useState} from 'react'

import {
  mainContainer,
  cardContainer,
  cardTitle,
  cardDescription,
  passwordInput,
  alertMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePwd = event => {
    event.preventDefault()
    setPassword(prevState => [...prevState, password])
  }
  return (
    <mainContainer>
      <cardContainer>
        <cardTitle>Password Validator</cardTitle>
        <cardDescription>
          Check how strong and secure is your password
        </cardDescription>
        <passwordInput
          type="password"
          value={password}
          onChange={onChangePwd}
        />
        {password.length < 8 && (
          <alertMsg>Your password must be at least 8 characters</alertMsg>
        )}
      </cardContainer>
    </mainContainer>
  )
}

export default PasswordValidator
