import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, deleteTodoClick, updateTodoClick }) => (
  <div>
  <table className="table table-hover table-bordered table-todos">
      <tbody>
      {todos.sort((a,b)=> a.create_date < b.create_date).map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onDelete={() => deleteTodoClick(todo.id)}
        onUpdate={updateTodoClick}
      />
    )}
    </tbody>
  </table>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    create_date: PropTypes.string.isRequired,
    write_date: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  deleteTodoClick: PropTypes.func.isRequired,
  updateTodoClick: PropTypes.func.isRequired
}

export default TodoList
