import React from 'react';


const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCat extends React.Component {
     
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape
    
    return (
      <div>
        <h1>Copy Cat</h1>
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          />
      </div>
    );
  };
}
export default CopyCat;