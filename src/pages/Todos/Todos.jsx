import React from 'react'
import './Todos.css'
const Todos = () => {
  return (
    <table class="table table-hover table-dark">
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
        <tr>
          <th scope="row">1</th>
          <td>Coding</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button className="btn btn-warning text-light">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger text-light">Delete</button>
          </td>
        </tr>{' '}
        <tr>
          <th scope="row">1</th>
          <td>Coding</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button className="btn btn-warning text-light">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger text-light">Delete</button>
          </td>
        </tr>{' '}
        <tr>
          <th scope="row">1</th>
          <td>Coding</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button className="btn btn-warning text-light">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger text-light">Delete</button>
          </td>
        </tr>{' '}
        <tr>
          <th scope="row">1</th>
          <td>Coding</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button className="btn btn-warning text-light">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger text-light">Delete</button>
          </td>
        </tr>{' '}
        <tr>
          <th scope="row">1</th>
          <td>Coding</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button className="btn btn-warning text-light">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger text-light">Delete</button>
          </td>
        </tr>{' '}
        <tr>
          <th scope="row">1</th>
          <td>Coding</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button className="btn btn-warning text-light">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger text-light">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Todos
