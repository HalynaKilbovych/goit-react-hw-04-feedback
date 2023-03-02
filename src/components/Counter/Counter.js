import React from 'react';
import PropTypes from 'prop-types';
import { Buttons, ButtonsItem } from './Counter.styled';

export const Counter = ({ options, onLeaveFeedback }) => (
  <Buttons>
    {options.map(option => (
      <ButtonsItem
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option[0] + option.slice(1)}
      </ButtonsItem>
    ))}
  </Buttons>
);

Counter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};