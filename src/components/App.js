import React from 'react'
import Header from './Header'
import Title from './Title'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import "../css/bootstrap.css"

const App = () => (
  <div className="container">
    <Title/>
    <AddTodo/>
    <Header/>
    <VisibleTodoList/>
  </div>
)

export default App
