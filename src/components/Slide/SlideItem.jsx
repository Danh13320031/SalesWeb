import React from 'react';

import PropTypes from 'prop-types';

SlideItem.propTypes = {
  image: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

SlideItem.defaultProps = {
  image: '',
  error: 'watch',
};

function SlideItem({ image, error }) {
  return (
    <div className="slide__item">
      <img width="100%" srcset={image} alt={error} />
    </div>
  );
}

export default SlideItem;
