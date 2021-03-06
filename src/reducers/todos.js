const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        title: action.title,
        description: action.description,
        create_date: action.create_date,
        write_date: action.write_date,
        completed: false
      }
    case 'UPDATE_TODO':
      if (state.id !== action.id) {
        return state
      }
        console.log('yes ')
      return {
        ...state,
        title: action.title,
        description: action.description,
        write_date: action.write_date,
      }

    case 'DELETE_TODO':
        return state.id !== action.id

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'UPDATE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'DELETE_TODO':
      return state.filter(t =>
        todo(t, action)
      )
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
