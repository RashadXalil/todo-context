import React from 'react'
import './Addtodo.css'
const Addtodo = () => {
  return (
    <div className="add__wrapper">
      <form>
        <div class="form-group">
          <center>
            <label for="exampleInputEmail1">To Do</label>
          </center>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <center>
            <small id="emailHelp" class="form-text text-muted mt-3">
              Enter your to do here
            </small>
          </center>
        </div>
        <center>
          <button type="submit" class="btn btn-primary">
            add
          </button>
        </center>
      </form>
    </div>
  )
}

export default Addtodo
