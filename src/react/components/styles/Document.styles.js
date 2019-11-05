import styled from "styled-components/macro";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  flex: 1;
  margin: 0;
  border: none;
  font-family: monospace;
  padding-top: 10px;
  padding-left: 10px;
  ${resetAppearance()}
`;

export const Button = styled.button`
  display: block;
  -webkit-appearance:none;
  padding: 2.5px;
  background: black;
  color: white;
  font-weight: bold;
  border: 0;
  &:active { background: grey; }
  ${resetAppearance()}
`;

function resetAppearance() {
  return (`
  &:focus,
  &:hover,
  &:active {
    outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
  }
  `)
}
