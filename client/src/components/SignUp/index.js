import React from 'react';
import { Input } from '../Atoms/Input'
import { FormButton } from '../Atoms/FormButton'

export const SignUp = (props) => {
  return (
    <div>
      <form>
        <Input
          inputType='text'
          inputName='signUpName'
          inputLabel='Name'
          placeholder='name'
          handleInputChange={props.handleInputChange}
        />
        <Input
          inputType='email'
          inputName='signUpEmail'
          inputLabel='Email'
          placeholder='email'
          handleInputChange={props.handleInputChange}
        />
        <Input
          inputType='password'
          inputName='signUpPassword'
          inputLabel='Password'
          placeholder='password'
          handleInputChange={props.handleInputChange}
        />
        <FormButton
          buttonName='signUpButton'
          buttonText='Sign Up'
          handleButtonPress={props.handleButtonPress}
        />
      </form>
    </div>
  )
}