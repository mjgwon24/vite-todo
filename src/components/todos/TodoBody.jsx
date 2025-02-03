import React from 'react'
import TodoItem from './TodoItem'

const TodoBody = ({ todos, onUpdate, onDelete }) => {

  const todoList = todos.map(todo => <TodoItem
    todo={todo}
    key={todo.id}
    onUpdate={onUpdate}
    onDelete={onDelete}
  />)
  
  return (
      <>
        <p className='text-lg text-gray-600'>할일 {todos.length}개</p>
        <ul className='px-0 my-8'>
          {todoList}
        </ul>
      </>
  )
}
export default TodoBody