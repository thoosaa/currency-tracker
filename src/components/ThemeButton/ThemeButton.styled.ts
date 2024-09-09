import styled from "styled-components";

export const SwitchWrap = styled.label`
  display: flex;
  align-items: center;
  position: relative;
`;

export const CheckBox = styled.input`
  display: none;
`;

export const Switch = styled.div`
  height: 30px;
  width: 50px;
  border-radius: 20px;
  position: relative;
  transition: background 0.2s;
  border: 1px solid ${({theme}) => theme.color ?? "#000"};

  &::after {
    content: "";
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    transition: left 0.2s;
    border: 1px solid ${({theme}) => theme.color ?? "#000"};
  }

  &.checked::after {
    left: 22px;
  }

  &:not(.checked)::after {
    left: 4px;
  }
`;
