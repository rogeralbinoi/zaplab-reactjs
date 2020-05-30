import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem";
import TodoList from "./TodoList";
import TodoListHeader from "../TodoListHeader";
import { v4 as uuidv4 } from 'uuid';

export default {
  title: "TodoList",
  component: TodoList,
};

export const TodoListExample = () => {
  const [tasks, setTasks] = useState([]);

  const [value, setValue] = useState("");
  const handleChangeText = (e) => {
    setValue(e.target.value);
  };

  const data = [
    {
      id: uuidv4(),
      title: "Limpar a casa",
      checked: false,
    },
    {
      id: uuidv4(),
      title: "Lavar a louça",
      checked: false,
    },
    {
      id: uuidv4(),
      title: "Arrumar a mesa",
      checked: false,
    },
    {
      id: uuidv4(),
      title: "Tomar café",
      checked: true,
    },
  ];

  useEffect(() => {
    // componentDidMount
    setTasks(data);
  }, []);

  const handleChangeTask = (e) => {
    const target = e.target;
    const { id, checked } = target;
    setTasks(
      [...tasks].map((item) => {
        if (item.id === id) {
          return { ...item, checked };
        }
        return item;
      })
    );
  };

  const handleClickAdd = () => {
      setTasks([...tasks, { id: uuidv4(), title: value }])
  }

  return (
    <React.Fragment>
      <TodoListHeader
        onAddClick={handleClickAdd}
        onChangeText={handleChangeText}
        value={value}
      />
      <TodoList tasks={tasks} handleChangeTask={handleChangeTask} />
    </React.Fragment>
  );
};
