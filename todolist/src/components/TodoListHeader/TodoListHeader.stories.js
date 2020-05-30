import React, { useState } from 'react';
import TodoListHeader from './TodoListHeader';
import { action } from '@storybook/addon-actions';

export default {
  title: 'TodoListHeader',
  component: TodoListHeader,
};

export const TodoListHeaderExample = () => {
    const [value, setValue] = useState('')
    const handleChangeText = (e) => {
        setValue(e.target.value)
    }
  return <TodoListHeader onAddClick={() => alert()} onChangeText={handleChangeText} value={value} />;
}
