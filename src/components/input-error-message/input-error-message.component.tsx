import React, { FunctionComponent } from 'react'
import { InputErrorMessageContainer } from './input-error-message.styles'

interface InputErrorMessageProps {
  children: React.ReactNode
}

const InputErrorMessage: FunctionComponent<InputErrorMessageProps> = ({
  children
}) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
