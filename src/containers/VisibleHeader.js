import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import Header from '../components/Header'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos.length
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed).length
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed).length
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  count: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo,
  deleteTodoClick: deleteTodo
}

const VisibleHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default VisibleHeader
