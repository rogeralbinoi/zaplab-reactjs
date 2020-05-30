import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default {
  title: 'TodoItem',
  component: TodoItem,
};

export const TodoItemExample = () => {
    const [checked, setChecked] = useState(false)

    const handleChangeChecked = (e) => {
        setChecked(e.target.checked)
    }

    return <TodoItem checked={checked} onChange={handleChangeChecked} title={'Limpar a casa'}></TodoItem>
}

class TodoItemClass extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
          checked: false
      }
    }

    handleChangeChecked = (e) =>  {
        this.setState({ checked: e.target.checked })
    }

    render () {
        const { checked } = this.state

        return <TodoItem checked={checked} onChange={this.handleChangeChecked} title={'Limpar a casa'}></TodoItem>
    }
}

export const TodoItemClassExample = () => <TodoItemClass />