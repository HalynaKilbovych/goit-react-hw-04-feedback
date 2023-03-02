import React from 'react';
import PropTypes from 'prop-types';
import { SectionText, SectionContainer } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      {title && <SectionText>{title}</SectionText>}
      {children}
    </SectionContainer>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};