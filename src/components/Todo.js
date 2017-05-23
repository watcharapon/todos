import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
const fmtDate="YYYY-MM-DD h:mm:ss"

class Todo extends React.Component {

	constructor(props) {
        super(props);
        this.state={
            isEdit: false,
			title: this.props.title,
			description: this.props.description,
            isDone: this.props.completed,
        }
        this.onEditClick = this.onEditClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.handlerDescription = this.handlerDescription.bind(this);
        this.handlerTitle = this.handlerTitle.bind(this);
    }

    onEditClick(e){
        this.setState({
            isEdit: true
        })
    }

    onSaveClick(e){
        this.props.onUpdate(this.props.id, this.state.title, this.state.description);
        this.onCancelClick(e);
    }


    onCancelClick(e){
        this.setState({
            isEdit: false
        })
    }

	handlerTitle(e){
		this.setState({
			title: e.target.value
		})
	}

	handlerDescription(e){
		this.setState({
			description: e.target.value
		})
	}

    render() {
          if(this.state.isEdit){
            return (
                <tr>
                    <td colSpan={4}>
                      	<form>
						  <div className="form-group">
							<label>Task ID </label>
							<span style={{marginLeft: 10}}>{(this.props.id)}</span>
						  </div>
						  <div className="form-group">
							  <label>Title</label>
                              <input type="text" className="form-control" onChange={this.handlerTitle} defaultValue={this.state.title}/>
						  </div>
						  <div className="form-group">
							  <label>Description</label>
                              <textarea className="form-control" onChange={this.handlerDescription} defaultValue={this.state.description}/>
						  </div>
						  <div className="form-group">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="col-sm-6" style={{paddingLeft:0}}>
                                        <label>Created Time:</label>
                                    </div>
                                    <div className="col-sm-6" style={{paddingLeft:0}}>
                                        {this.props.create_date}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="col-sm-6" style={{paddingLeft:0}}>
                                        <label>Writed Time:</label>
                                    </div>
                                    <div className="col-sm-6" style={{paddingLeft:0}}>
                                        {this.props.write_date}
                                    </div>
                                </div>
                            </div>
						  </div>
                          <button type="button" className="btn btn-success" onClick={this.onSaveClick}>Save</button>
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
                    <td style={{borderRight:'none'}} onClick={this.onEditClick}>
                        <p style={{fontSize: 17, margin:0, textDecoration: this.props.completed ? 'line-through' : 'none' }}>{this.props.title}</p>
                        <p style={{margin:0, textDecoration: this.props.completed ? 'line-through' : 'none' }}><small>{this.props.description}</small></p>
                        <p className="todo-time" style={{margin:0, color:"#dbdbdb"}}><small>{moment(this.props.write_date, fmtDate).calendar()} </small></p>
                    </td>
                    <td style={{width:10, borderLeft:'none', borderRight:'none',}}>
                        <a href="#" onClick={this.onEditClick} style={{verticalAlign: "text-bottom"}}>
                            <span className="glyphicon glyphicon-pencil"></span>
                        </a>
                    </td>
                    <td style={{width:10, borderLeft:'none'}}>
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
  onUpdate: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Todo
