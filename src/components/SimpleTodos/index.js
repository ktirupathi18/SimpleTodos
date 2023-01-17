import './index.css'

import {Component} from 'react'

import TodoItems from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodo extends Component {
  state = {todoList: initialTodosList}

  onDelete = id => {
    const {todoList} = this.state
    const filteredTodoData = todoList.filter(each => each.id !== id)
    this.setState({
      todoList: filteredTodoData,
    })
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="container">
        <ul className="todo-container">
          <h1 className="heading">Simple Todos</h1>
          {todoList.map(eachItem => (
            <li type="none" key={eachItem.id}>
              <TodoItems
                details={eachItem}
                key={eachItem.id}
                deleteTodo={this.onDelete}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodo
