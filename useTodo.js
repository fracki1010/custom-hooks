import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }


export const useTodo = (initialState = []) => {


    //todo: es lal lista de tareas
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  //Cada vez que el "todos" cambie el localStorage se va a guardar gracias al Effect
  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos])


  const handleNewTodo = (todo) => {

    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    //Con el dispatch le envio la action al reducer
    dispatch(action)

  }


  const handleDeleteTodo = (id) => {

    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    })

    console.log({ id });

  }

  const handleToggleTodo = (id) => {

    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id,
    })

    console.log({ id });

  }


  const todosCount = todos.length;

  const pendingTodosCount = todos.filter((todo) => !todo.done).length




    return {
        ...todos,
        todos,
        todosCount,
        pendingTodosCount,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
    }
}