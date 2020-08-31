import React from 'react'
import TaskCard from './TaskCard'
import { red } from '@material-ui/core/colors'
import AddCardButton from './AddButton'

const TaskList = ({title, cards}) => {
    return (
        <div style={styles.container}>
            <h1>{title}</h1>
            {cards.map(card => {
                return <TaskCard key={card.id} text={card.text}/>
            })}
            <AddCardButton />
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8
    }
}

export default TaskList