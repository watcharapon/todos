import moment from 'moment'

let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  create_date: moment().format('YYYY-MM-DD h:mm:ss'),
  write_date: null,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id

})
