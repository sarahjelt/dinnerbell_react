import React from 'react';
import { Input } from '../Atoms/Input'
import { FormButton } from '../Atoms/FormButton'

export const SignIn = (props) => {
  return (
    <form className='margin-top'>
      <Input
        inputType='text'
        inputName='loginEmail'
        inputLabel='email'
        placeholder='email'
        handleInputChange={props.handleInputChange}
      />
      <Input
        inputType='password'
        inputName='loginPassword'
        inputLabel='password'
        placeholder='password'
        handleInputChange={props.handleInputChange}
      />
      <FormButton
        buttonName='loginButton'
        buttonText='Sign In'
        handleButtonPress={props.handleButtonPress}
      />
    </form>
  )
}