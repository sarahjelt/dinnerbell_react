import React from 'react';

export const SearchResults = props => {
  return (
    <div className='recipe'>
      <img src={props.picture} alt={props.name} />
      <a href={props.url}><i className='add-recipe medium material-icons waves-effect waves-light' data-id=''>add_circle</i></a>
    </div>
  )
};