import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  border: 1px solid hotpink;
  padding: 0.5em;
  font-family: Arial;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  position: relative;
  ${({ checked }) => !!checked && `
    &::after {
        content: '';
        background: #000;
        width: 80%;
        height: 2px;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
    }
  `}
`

/*
 * Controlled component / Componente controlado
 */

const TodoItem = ({ checked = false, title = "", onChange, id }) => {
  return (
    <Wrapper>
      <Label checked={checked} >
        <input id={id} type="checkbox" checked={checked} onChange={onChange} /> {title}
      </Label>
    </Wrapper>
  );
};

export default TodoItem;
