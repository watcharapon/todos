import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <tr>
      <td style={{width:10}}>
        <div className="checkbox" style={{margin:0}}>
          <label>
            <input type="checkbox" value=""/>
            </label>
        </div>
      </td>
      <td
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
       >
        <p style={{margin:0}}>{text}</p>
        <p style={{margin:0, color:"#dbdbdb"}}><small><b>Today 11:00 PM </b></small></p>
    </td>
    <td style={{width:10}}>
        <a href="#">
            <span className="glyphicon glyphicon-pencil"></span>
        </a>
    </td>
    <td style={{width:10}}>
        <a href="#">
            <span className="text-danger glyphicon glyphicon-trash"></span>
        </a>
    </td>
  </tr>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
