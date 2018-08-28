import React from 'react';
import { SignUp } from '../../components/SignUp';
import { SignIn } from '../../components/SignIn';
import API from '../../utils/api'

class AuthPage extends React.Component {
  constructor(props) {
    super(props);

  }

  state = {
    loginEmail: '',
    loginPassword: '',
  }

  handleInputChange = (event, inputName) => {
    this.setState({
      [inputName]: event.target.value
    })
  }

  handleButtonPress = (value, buttonName) => {
    console.log(['you logged in as', this.state.loginEmail, this.state.loginPassword])

    let userData = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }

    API.authenticateUser(userData)
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <SignUp
          handleInputChange={this.handleInputChange}
          handleButtonPress={this.handleButtonPress}
        />
        <SignIn
          handleInputChange={this.handleInputChange}
          handleButtonPress={this.handleButtonPress}
        />
      </div>
    )
  }
}


export default AuthPage;