import React from 'react';
import PropTypes from "prop-types"


export const ListItem = ({ text }) => {
  return (
    <li>
      {text}
    </li>
  );
};

ListItem.propTypes={
    text: PropTypes.string,
}
export default ListItem