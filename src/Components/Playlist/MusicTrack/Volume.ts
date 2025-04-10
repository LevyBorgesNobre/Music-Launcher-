import styled from "styled-components";

export const Div = styled.div`
display: flex;
width:2rem;
gap: 0.4rem;
align-items: center;
`;

export const VolumeSound = styled.input.attrs({ type: 'range' })`
  flex: 1;
  height: 6px;
  background: black;
  border-radius: 4px;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-slider-runnable-track {
    height: 6px;
    background: transparent; 
    border-radius: 4px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: gray;
    margin-top: -3px;
  }

`;
