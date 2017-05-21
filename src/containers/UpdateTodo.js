import { connect } from 'react-redux'
import { updateTodo} from '../actions'
import EditTodo from '../components/EditTodo'

const mapStateToProps = (state) => ({
  todo: state
})

const mapDispatchToProps = {
  onUpdate: updateTodo,
}

const UpdateTodo = connect(
  mapDispatchToProps
)(UpdateTodo)

export default UpdateTodo
