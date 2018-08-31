import React from 'react';
import AuthService from '../../components/Modules/AuthService';
import API from '../../utils/api';
import { SearchResults } from '../../components/SearchResults';
import { Slides } from '../../components/Slides';
import Materialize from 'materialize-css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
  }

  state = {
    searchValue: '',
    results: [],
    userEmail: '',
    userId: '',
    userName: ''
  }

  componentWillMount() {
    this.setUserInfoInState();
  };

  handleInputChange = event => {
    this.setState({
      searchValue: event.target.value
    })
  }

  setUserInfoInState = () => {
    let userInfo = this.Auth.getProfile();
    console.log(userInfo);

    if (!userInfo) {
      console.log('no user logged in')
    } else {
      this.setState({
        userEmail: userInfo.email,
        userId: userInfo._id,
        userName: userInfo.name
      })
    }
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

  handleAdd = (name, recipeId, url, picture) => {
    Materialize.toast(`${name} saved!`, 4000);

    let userId = this.state.userId;
    let mealItem = {
      name,
      recipeId,
      url,
      picture
    }

    API.getMealIdIfExists(mealItem)
      .then(res => {
        console.log([res.data.length === 0, res.data])
        if (res.data.length < 1) {
          console.log('this item does not exist in the DB');
          API.addMealToDB(mealItem)
            .then(response => {
              API.getMealIdIfExists(mealItem)
                .then(res2 => {
                  let mealItemId = res2.data[0]._id
                  API.addMealToUserSaved(userId, mealItemId)
                    .then(res => console.log(res))
                })
            })
        } else {
          console.log('this item is already in the DB');
          API.addMealToUserSaved(userId, res.data[0]._id)
            .then(res => console.log(res))
        }
      })
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
                handleAdd={this.handleAdd}
              />
            ))}
          </div>
          <div className='multiple'>
            {
              (this.Auth.loggedIn() ) ? (
                <Slides
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={3}
                  slidesToScroll={1}
                />
              ) : (
                <Slides
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                />
              )
            }
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