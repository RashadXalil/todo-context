import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const index = () => {
  return (
    <div className="custom__header">
      <div className="custom__header__left">To Do App</div>
      <div className="custom__header__right">
        <ul className="custom__header__right__links">
          <li className="custom__header__right__links__item">
            <Link to="/">Home</Link>
          </li>
          <li className="custom__header__right__links__item">
            <Link to="/addtodo">Add To Do</Link>
          </li>
          <li className="custom__header__right__links__item">
            <Link to="/todos">To Do List</Link>
          </li>
          <li className="custom__header__right__links__item">
            <Link to="/complatedtodos">Complated Todos</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default index
