import React from 'react';
import API from '../../utils/api';

class Home extends React.Component {

  constructor(props) {
    super(props);

  }

  state = {
    searchValue: ''
  }

  handleInputChange = event => {
    this.setState({
      searchValue: event.target.value
    })
  }

  searchFunc(event) {
    event.preventDefault();
    API.searchByQuery(this.state.searchValue)
      .then(res => {
        console.log(res)
        this.parseResultsFromAPICall(res)
      })
  }

  parseResultsFromAPICall = res => {
    let results = res.recipes
    let savedResults = [];
    let mealItemObj = {};

    savedResults.push(mealItemObj);
    console.log(savedResults);
  }

  render() {
    return (
      <main>
        <div className='container'>
          <div>
            <h1>Dinner Bell</h1>
            <h2>Come and get it!</h2>
          </div>
          <div className='main-btn'>
            <form>
              <input
                type='text'
                id='searchbar'
                placeholder='What kind of recipe are you looking for?'
                value={this.state.searchValue}
                onChange={event => this.handleInputChange(event)}
              />
              <input
                type='submit'
                id='submit'
                className='btn waves-effect waves-light'
                onSubmit={event => this.state.searchFunc(event)}
              />
            </form>
          </div>
          <div id='tiles-go-here'>

          </div>
          <div className='multiple-items'>


          </div>
        </div>
      </main>
    )
  }
}

// const formActionDeterminer = searchValue => {
//   return `/search/${searchValue}`
// };

export default Home;