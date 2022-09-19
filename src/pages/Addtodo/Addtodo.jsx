import React from 'react'
import { useTodosContext } from '../../context/todos'
import './Addtodo.css'
import toast, { Toaster } from 'react-hot-toast'
const Addtodo = () => {
  const { setTodos } = useTodosContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = e.target.todo.value
    setTodos((prev) => [...prev, { todo, completed: false }])
    toast.success('Todo Created')
    e.target.reset()
  }
  return (
    <div className="add__wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <center>
            <label htmlFor="exampleInputEmail1">To Do</label>
          </center>
          <input required type="text" className="form-control" name="todo" />
          <center>
            <small id="emailHelp" className="form-text text-muted mt-3">
              Enter your to do here
            </small>
          </center>
        </div>
        <center>
          <button type="submit" className="btn btn-primary">
            add
          </button>
        </center>
      </form>
      <Toaster position="top-center" />
    </div>
  )
}

export default Addtodo
