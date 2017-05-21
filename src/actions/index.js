import moment from 'moment'

/*let nextTodoId = 0*/
const redix=10; //the radix is 10 (decimal) 
export const addTodo = (title) => ({
  type: 'ADD_TODO',
  //id: nextTodoId++,
  id: parseInt(moment().format("YYYYMMDDhmmSS"),redix),
  create_date: moment().format('YYYY-MM-DD h:mm:ss'),
  write_date: moment().format('YYYY-MM-DD h:mm:ss'),
  description: "",
  title
})

export const updateTodo = (id,title,description) => ({
  type: 'UPDATE_TODO',
  write_date: moment().format('YYYY-MM-DD h:mm:ss'),
  title,
  description,
  id
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
