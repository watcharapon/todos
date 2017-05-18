import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, deleteTodoClick }) => (
  <div>
  <table className="table table-hover">
      <tbody>
      {todos.sort((a,b)=> a.id < b.id).map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onDelete={() => deleteTodoClick(todo.id)}
      />
    )}
    </tbody>
  </table>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  deleteTodoClick: PropTypes.func.isRequired
}

export default TodoList
