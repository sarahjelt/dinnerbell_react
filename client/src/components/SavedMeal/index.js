import React from 'react';

export const SavedMeal = props => {
  if (props.saved.length === 0) {
    return <h5>No saved recipes!</h5>
  } else {
  return props.saved.map((result, index) => (
      <div className='recipe-that-is-saved' key={index} id={result._id}>
        <img src={result.item.picture} className='saved-photo' dataid={result.item.recipeId} />
        <p><a href={result.item.url}>{result.item.name}</a></p>
      </div>
    ))
  }
};