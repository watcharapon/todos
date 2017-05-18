import React from 'react'
import Header from './Header'
import Title from './Title'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleHeader from '../containers/VisibleHeader'
import "../css/bootstrap.css"

const App = () => (
  <div className="container">
    <Title/>
    <AddTodo/>
    <VisibleHeader/>
    <VisibleTodoList/>
  </div>
)

export default App
