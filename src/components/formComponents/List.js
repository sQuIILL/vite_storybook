import React from 'react';
import PropTypes from 'prop-types';

export const List = ({ children, backgroundColor }) => {
  return (
    <ul style={{ backgroundColor }}>
      {children}
    </ul>
  );
};

List.propTypes = {
  backgroundColor: PropTypes.string
}