import styled, { css } from 'styled-components';

export const SearchBar = styled.div`
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`;

export const Form = styled.form`
  justify-content: flex-end;
  display: flex;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const size = 64;

const shared = () => css`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 2px;
  height: ${size}px;
`;

export const Input = styled.input`
  ${shared};
  box-sizing: border-box;
  padding: 0 16px;
  width: 256px;
  max-width: 70%;
  font-size: 112%;
  font-weight: 400;
  color: white;

  &::placeholder {
    font-weight: 300;
    color: white;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
  }
  
  &[data-autocompleted] {
      background-color: transparent !important;
  }
`;

export const Button = styled.button`
  ${shared};
  width: ${size}px;
  margin-left: 16px;
  cursor: pointer;
`;

export const MagnifyingGlass = styled.img`
  width:  ${size * .375}px;
  height: ${size * .375}px;
  filter: invert(1);
`;

export const Checkboxes = styled.div`
  justify-content: flex-end;
  flex-wrap: wrap;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CheckboxBox = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  margin-bottom: 16px;

  &:not(:first-child) {
    margin-left: 16px;
  }

  @media (max-width: 768px) {
    margin: 8px 16px;
  }
`;

export const Checkbox = styled.div`
  width:  24px;
  height: 24px;
  margin-right: 8px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Check = styled.img`
  width:  16px;
  height: 16px;
  filter: invert(1);
`;

export const CheckboxLabel = styled.span`
  color: white;
  font-weight: 500;
`;