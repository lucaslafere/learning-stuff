//Em Button.jsx:
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Style';

function Button({ label, backgroundColor = 'red', size = 'md', handleClick }) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;
  const padding = `${scale * 0.5}rem ${scale * 1}rem`;

  return (
    <S.Button onClick={handleClick} backgroundColor={backgroundColor} padding={padding}>
      {label}
    </S.Button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func,
};

export default Button;
