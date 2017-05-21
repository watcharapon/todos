import React from 'react'
import Title from './Title'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleHeader from '../containers/VisibleHeader'
import "../css/bootstrap.css"
import "../css/todos.css"

const App = () => (
  <div className="container">
    <Title/>
    <AddTodo/>
    <VisibleHeader/>
    <VisibleTodoList/>
  </div>
)

export default App
