import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
       <div className="input-group">
            <input className="form-control input-lg" placeholder="What to be done?" ref={node => {
              input = node
            }} />
            <span className="input-group-btn">
                <button className="btn btn-success btn-lg" type="submit">
                  <span className="glyphicon glyphicon-plus"></span>
                </button>
            </span>
        </div>
      </form>

      </div>
      </div>

    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
