import React from 'react';
import { SavedMeal } from '../../components/SavedMeal';
// import AuthService from '../../components/modules/AuthService';

class Saved extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.Auth = new AuthService();
  // }

  state = {
    searchValue: '',
    savedMeals: []
  }

  render() {
    return (
      <main>
        <div className='container'>
          <div>
            <h1>Saved</h1>
          </div>
          <div id='saved-recipes'>
            {this.state.savedMeals.map((result, index) => (
              <SavedMeal
                id={1}
                key={1}
              />
            ))}
          </div>
        </div>
      </main>
    )
  }
}

export default Saved;