import React from 'react'

import PageHeader from './PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default props => (
    <div>
        <PageHeader name='Todo' small='Add' />
        <TodoForm />
        <TodoList />
    </div>
)
