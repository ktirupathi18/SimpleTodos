// Write your code here
import './index.css'

const TodoItems = props => {
  const {details, deleteTodo} = props
  const {title, id} = details
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <div className="todo-item">
      <p className="todo-head" id={id}>
        {title}
      </p>
      <form>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </form>
    </div>
  )
}

export default TodoItems
