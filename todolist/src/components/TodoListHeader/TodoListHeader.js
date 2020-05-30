import React from 'react'
import styled from 'styled-components'

const Header = styled.header`

`
const Label = styled.label`
    margin-right: .5em;
`

const Input = styled.input`
    border: 2px solid black;
`

const Button = styled.button`
    background: lime;
    color: #000;
    border: 1px solid hotpink;
    font-weight: bold;
`

const TodoListHeader = ({ onAddClick, onChangeText, value }) => { /* Dumb components */
    return (
        <Header>
            <Label>Tarefa:</Label>
            <Input value={value} onChange={onChangeText}  type={'text'} />
            <Button onClick={onAddClick}>Add</Button>
        </Header>
    )
}

export default TodoListHeader