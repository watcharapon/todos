import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import "../css/bootstrap.css"

const App = () => (
  <div className="container">
    <Header/>
    <Footer/>
    <AddTodo/>
    <VisibleTodoList/>
  </div>
)

export default App
