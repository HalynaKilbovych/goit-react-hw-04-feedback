import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;

export const ButtonsItem = styled.button`
  width: 250px;
  height: 55px;
  text-transform: uppercase;
  border: none;
  font-size: larger;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:not(:last-child) {
    margin-right: 50px;
  }
  &:first-child { 
    background-color: olive;
  }
  &:nth-child(2) { 
    background-color: gray;
  }
  &:last-child { 
    background-color: rosybrown;
  }
  &:hover, 
  &:focus{ 
    transform: scale(1.1);
  }
`;