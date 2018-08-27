import React from 'react';

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
          <div id='saved-recipes'>

          </div>
        </div>
      </main>
    )
  }
}

export default Saved;