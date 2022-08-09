import React from 'react';
import styles from '../styles.js';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCat extends React.Component {
  
  render() {
    return (
      <div style={styles.divStyles}>
        <h1>Copy Cat</h1>

        <img style={styles.imgStyles} alt='cat'
          src={this.props.copying ? images.copycat : images.quietcat}
          onClick={this.props.toggleTape}
        />
      </div>
    );
  };
}

export default CopyCat;