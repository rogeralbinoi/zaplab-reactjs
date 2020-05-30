// Componente Funcional - Functional Component
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
  padding: 1em;
  ${({ color }) => {
      return `
        color: ${color};
        border: 2px solid ${color};
      `
  }}
`

const HelloWorld = ({ name = 'World', color = 'hotpink' }) => { // objeto com as propriedades
    // const name = props.name
    // const { name } = props
    return <Wrapper color={color}>Hello {name}</Wrapper>
}

export default HelloWorld