import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import IconButton from './IconButton'
import { markAsDone, markAsPending, remove } from '../actions'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hidden={todo.done} onClick={() => props.markAsDone(todo)} />
                    <IconButton style='warning' icon='undo' hidden={!todo.done} onClick={() => props.markAsPending(todo)} />
                    <IconButton style='danger' icon='trash-o' hidden={!todo.done} onClick={() => props.remove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = (dispatch) => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)