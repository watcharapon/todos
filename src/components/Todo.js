import React from 'react'
import PropTypes from 'prop-types'


const Todo = ({ onClick, onDelete, completed, text }) => (
  <tr>
      <td style={{width:10}}>
        <div className="checkbox" style={{margin:0}}>
          <label>
              {completed ?  <input type="checkbox" value="" onClick={onClick}/> : <input type="checkbox" onClick={onClick} value=""/> }
            </label>
        </div>
      </td>
      <td>
        <p style={{margin:0, textDecoration: completed ? 'line-through' : 'none' }}>{text}</p>
        <p className="todo-time" style={{margin:0, color:"#dbdbdb"}}><small> Today 11:00 PM </small></p>
    </td>
    <td style={{width:10}}>
        <a href="#">
            <span className="glyphicon glyphicon-pencil"></span>
        </a>
    </td>
    <td style={{width:10}}>
        <a href="#" onClick={() => {if(confirm('Delete the item?')) {onDelete()};}}>
            <span className="text-danger glyphicon glyphicon-trash"></span>
        </a>
    </td>
  </tr>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
