import React from 'react';
import { SavedMeal } from '../../components/SavedMeal';

class Saved extends React.Component {

  // constructor(props) {
  //   super(props);

  // }

  state = {
    searchValue: ''
  }

  handleInputChange = event => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <main>
        <div className='container'>
          <div>
            <h1>Saved</h1>
          </div>
          <div className='saved-recipes'>
            <SavedMeal />
          </div>
        </div>
      </main>
    )
  }
}

export default Saved;