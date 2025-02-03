import React, { useState } from 'react'
import TodoFilter from './TodoFilter'
import { createPortal } from 'react-dom';
import Modal from '../ui/Modal';
import TodoForm from './TodoForm';

const TodoHeader = ({ onAdd, category, sort, onFilter, onArray }) => {
  
  const [openModal, open] = useState(false);
  
  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
    <button 
            onClick={() => open(true)}
            className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
            data-cy="add-todo-button">Add Todo
    </button>

    {/*  최신순, 오래된 순 버튼 */}
    <div className="flex gap-4">
        <button
                onClick={() => onArray('NEW')}
                className={`px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer ${sort === 'NEW' && 'bg-gray-600'}`}
                data-cy="sort-new-button">최신순
        </button>
        <button
                onClick={() => onArray('OLD')}
                className={`px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer ${sort === 'OLD' && 'bg-gray-600'}`}
                data-cy="sort-old-button">오래된 순
        </button>
    </div>

    {openModal && createPortal(
      <Modal>
        <TodoForm onAddOrUpdate={onAdd} onClose={() => open(false)}>
          할일 등록
        </TodoForm>
      </Modal>,
      document.body
    )}

    <TodoFilter category={category} onFilter={onFilter} />
  </div>
  )
}
export default TodoHeader