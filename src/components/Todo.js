import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
const fmtDate="YYYY-MM-DD h:mm:ss"

class Todo extends React.Component {

	constructor(props) {
        super(props);
        this.state={
            isEdit: false,
			value: this.props.text,
        }
        this.onEditClick = this.onEditClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.handlerText = this.handlerText.bind(this);
    }

    onEditClick(e){
        this.setState({
            isEdit: true
        })
    }

    onCancelClick(e){
        this.setState({
            isEdit: false
        })
    }

	handlerText(e){
		this.setState({
			value: e.target.value
		})
	}

    render() {
          if(this.state.isEdit){
            return (
                <tr>
                    <td colSpan={4}>
                      	<form>
						  <div className="form-group">
							<input type="text" className="form-control" onChange={this.handlerText} value={this.state.value}/>
						  </div>
						  <div className="form-group">
							<label>Create Date </label>
							<span style={{marginLeft: 10}}>{this.props.create_date}</span>
						  </div>
						  <button type="submit" className="btn btn-success">Save</button>
						  <button className="btn btn-default pull-right" onClick={this.onCancelClick}>Cancel</button>
					   </form>  
                    </td>
                </tr>
                )
          }else{
            return (
              <tr>
                    <td style={{width:10}}>
                    <div className="checkbox" style={{margin:0}}>
                      <label>
                          {this.props.completed ?  <input type="checkbox" checked value="" onClick={this.props.onClick}/> : <input type="checkbox" onClick={this.props.onClick} value=""/> }
                        </label>
                    </div>
                    </td>
                    <td>
                        <p style={{margin:0, textDecoration: this.props.completed ? 'line-through' : 'none' }}>{this.props.text}</p>
                        <p className="todo-time" style={{margin:0, color:"#dbdbdb"}}><small>{moment(this.props.write_date, fmtDate).calendar()} </small></p>
                    </td>
                    <td style={{width:10}}>
                        <a href="#" onClick={this.onEditClick}>
                            <span className="glyphicon glyphicon-pencil"></span>
                        </a>
                    </td>
                    <td style={{width:10}}>
                        <a href="#" onClick={() => {if(confirm('Delete the item?')) {this.props.onDelete()};}}>
                            <span className="text-danger glyphicon glyphicon-trash"></span>
                        </a>
                    </td>

                  </tr>
            )

          }
    }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
