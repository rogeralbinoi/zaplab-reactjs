import React from 'react'
import styled from 'styled-components'
import Title from '../Title'
import TodoItem from '../TodoItem'

const Wrapper = styled.ul`
    border: 1px solid #000;
`

const TodoList = ({ children, tasks, handleChangeTask }) => {
    return (
        <div>
            <Title>Tarefas</Title>
            <Wrapper>
                {
                    tasks.filter(item => !item.checked).map(item => {
                        return <TodoItem
                        id={item.id}
                        onChange={handleChangeTask}
                        checked={item.checked}
                        title={item.title}
                    ></TodoItem>
                    })
                }
            </Wrapper>
            <Title>Concluídas</Title>
            <Wrapper>
                {
                    tasks.filter(item => item.checked).map(item => {
                        return <TodoItem
                        id={item.id}
                        onChange={handleChangeTask}
                        checked={item.checked}
                        title={item.title}
                    ></TodoItem>
                    })
                }
            </Wrapper>
        </div>
    )
}

export default TodoList