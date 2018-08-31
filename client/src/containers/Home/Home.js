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

  searchFunc = event => {
    event.preventDefault();

    API.searchByQuery(this.state.searchValue)
      .then(res => {
        console.log(res)
        this.parseResultsFromAPICall(res)
      })
  };

  parseResultsFromAPICall = res => {
    let results = res.recipes
    let savedResults = [];
    
    results.forEach(mealItem => {
      let mealItemObj = {
        id: mealItem.recipe_id,
        name: mealItem.title,
        picture: mealItem.image_url,
        url: mealItem.source_url
      }
      savedResults.push(mealItemObj)
    })
    this.setState({
      results: savedResults
    })
    console.log(savedResults);
  };

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
                onClick={this.searchFunc}
              />
            </form>
          </div>
          <div id='tiles-go-here'>
            {this.state.results.map((result, index) => (
              <SearchResults
                id={result.id}
                key={index}
                name={result.name}
                picture={result.picture}
                url={result.url}
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
//   return `/`
// };

export default Home;