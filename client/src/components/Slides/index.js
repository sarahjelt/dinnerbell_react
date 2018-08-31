import React from 'react';
import Slider from 'react-slick';

export const Slides = props => {
  if (!props.bool) {
    return (
      <div>
      <h4 className='slide-header'>Try one of these!</h4>
      <Slider {...props}>
        {stockImages.map((result, index) => (
          <div className='slides' key={index}>
            <a href={result.url} target='_blank'>
              <img src={result.picture} />
            </a>
          </div>
          )
        )}
      </Slider>
      </div>
    )
  }

  return (
    <div>
    <h4 className='slide-header'>Remember these?</h4>
    <Slider {...props}>
      {props.saved.map((result, index) => (
        <div className='slides' key={index} id={result._id}>
          <a href={result.item.url} target='_blank'>
            <img src={result.item.picture} />
          </a>
        </div>
      ))}
    </Slider>
    </div>
  )
}

const stockImages = [
  {
    'url': 'http://www.closetcooking.com/2009/11/pumpkin-pie-french-toast.html',
    'picture': 'http://static.food2fork.com/PumpkinPieFrenchToast15002845c7fe.jpg'},
  {
    'url': 'http://www.cookincanuck.com/2012/01/baked-french-fries-with-indian-spices-cumin-coriander-recipe/',
    'picture': 'http://static.food2fork.com/6704145631_beb025593ca4bf.jpg'
  },
  {
    'url': 'http://www.closetcooking.com/2012/08/maple-bourbon-bacon-jam.html',
    'picture': 'http://static.food2fork.com/Maple2BBourbon2BBacon2BJam2B8002B4267ded4f5a7.jpg'
  },
  {
    'url': 'http://www.twopeasandtheirpod.com/blueberry-yogurt-waffles/',
    'picture': 'http://static.food2fork.com/BlueberryYogurtWaffles3a02e.jpg'
  },
  {
    'url': 'http://www.closetcooking.com/2011/06/warm-mushroom-and-wild-rice-salad-with.html',
    'picture': 'http://static.food2fork.com/Warm2BMushroom2Band2BRoasted2BAsparagus2BWild2BRice2BSalad2Bwith2Band2BFeta2B5002B71693724de9b.jpg'
  },
  {
    'url': 'http://www.twopeasandtheirpod.com/vegetarian-quinoa-chili/',
    'picture': 'http://static.food2fork.com/quinoachili15b76.jpg'
  }
];