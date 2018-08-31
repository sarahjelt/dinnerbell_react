import React from 'react';
import Slider from 'react-slick';

export const Slides = props => {
  if (!props.bool) {
    return (
      <Slider {...props}>
        {stockImages.map((item, key) => (
          <div className='slides' key={item}>
            <a href={item}>
              <img src={item} />
            </a>
          </div>
          )
        )}
      </Slider>
    )
  }

  return (
    <Slider {...props}>
      {props.saved.map((result, index) => (
        <div className='slides' key={index} id={result._id}>
          <a href={result.item.url}>
            <img src={result.item.picture} />
          </a>
        </div>
      ))}
    </Slider>
  )
}

const stockImages = ['https://i.pinimg.com/564x/6b/0b/8a/6b0b8a1c3443327b245fee7315a813f0.jpg', 'https://i.pinimg.com/564x/6b/0b/8a/6b0b8a1c3443327b245fee7315a813f0.jpg', 'https://i.pinimg.com/564x/6b/0b/8a/6b0b8a1c3443327b245fee7315a813f0.jpg', 'https://i.pinimg.com/564x/6b/0b/8a/6b0b8a1c3443327b245fee7315a813f0.jpg', 'https://i.pinimg.com/564x/6b/0b/8a/6b0b8a1c3443327b245fee7315a813f0.jpg', 'https://i.pinimg.com/564x/6b/0b/8a/6b0b8a1c3443327b245fee7315a813f0.jpg'];