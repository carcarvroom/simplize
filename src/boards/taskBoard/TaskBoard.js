import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskList from './TaskList'
import AddListButton from './AddButton'
import { DragDropContext } from 'react-beautiful-dnd'

class TaskBoard extends Component {
    onDragEnd = () => {

    }
    render() {
        const { lists } = this.props
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
            <div style={styles.listsContainer}>
                {lists.map(list => {
                    return <TaskList key={list.id} listId={list.id} title={list.title} cards={list.cards} />
                })}
                <AddListButton list/>
            </div>
            </DragDropContext>
        )
    }
}

const styles = {
    listsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 8
    }
}
const mapStateToProps = state => ({
    lists: state.taskList
})

export default connect(mapStateToProps)(TaskBoard)