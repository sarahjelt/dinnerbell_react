import React from 'react';

class Home extends React.Component {

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