import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useTodosContext } from '../../context/todos'
import './Todos.css'
const Todos = () => {
  const { todos, setTodos } = useTodosContext()
  console.log(todos)

  const handleTodoStatusChange = (index) => {
    todos[index].completed = !todos[index].completed
    toast.success('todo complated')
    setTodos([...todos])
  }
  const deleteHandler = (index) => {
    todos.splice(index, 1)
    setTodos([...todos])
    toast.success('Todo deleted !')
  }
  return (
    <>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Content</th>
            <th scope="col">Is Complated</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={Math.floor(Math.random() * 100)}>
                <th scope="row">{Math.floor(Math.random() * 100)}</th>
                <td>{todo.todo}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={handleTodoStatusChange.bind(null, index)}
                    name="todoCheckbox"
                    id="todoCheckBox"
                    checked={todo.completed}
                  />
                </td>
                <td>
                  <button className="btn btn-warning text-light">Edit</button>
                </td>
                <td>
                  <button
                    className="btn btn-danger text-light"
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Toaster />
    </>
  )
}

export default Todos
