import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskList from './TaskList'
import AddListButton from './AddButton'

class TaskBoard extends Component {
    render() {
        const { lists } = this.props
        return (
            <div style={styles.listsContainer}>
                {lists.map(list => {
                    return <TaskList key={list.id} title={list.title} cards={list.cards} />
                })}
                <AddListButton list/>
            </div>
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