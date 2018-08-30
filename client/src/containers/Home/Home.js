import React from 'react';
// import AuthService from '../../components/Modules/AuthService';
import API from '../../utils/api';
import { SearchResults } from '../../components/SearchResults';
import { Slides } from '../../components/Slides';

class Home extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.Auth = new AuthService();
  // }

  state = {
    searchValue: '',
    results: []
  }

  handleInputChange = event => {
    this.setState({
      searchValue: event.target.value
    })
  }

  componentDidMount() {
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
            {this.state.results.map((result, index) => (
              <SearchResults
                id={1}
                key={1}
              />
            ))}
          </div>
          <div className='multiple'>
            <Slides
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
            />
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