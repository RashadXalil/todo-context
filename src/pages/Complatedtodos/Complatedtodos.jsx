import React from 'react'
import { useTodosContext } from '../../context/todos'

const Complatedtodos = () => {
  const { todos, setTodos } = useTodosContext()
  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Content</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos
          .filter((x) => x.completed)
          .map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">1</th>
                <td>{item.todo}</td>
                <td>
                  <button className="btn btn-warning text-light">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger text-light">Delete</button>
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default Complatedtodos
