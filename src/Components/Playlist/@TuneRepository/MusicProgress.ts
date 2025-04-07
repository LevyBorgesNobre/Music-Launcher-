import styled from "styled-components";

export const TimerMusic = styled.span`
font-family: "Baloo 2", serif;
`
export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 70%;
  color: black;
`;

export const Progress = styled.input.attrs({ type: 'range' })`
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

  &::-moz-range-track {
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

  &::-moz-range-thumb {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: white;
  }

  &:focus {
    outline: none;
  }
`;

export const Time = styled.span`
  font-size: 12px;
  color: black;
  white-space: nowrap;
  font-family: "Baloo 2", serif;
`;
