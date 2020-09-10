import React, { Component } from 'react'
import Textarea from 'react-textarea-autosize'
import { connect } from 'react-redux'
import { addTaskCard } from '../../actions'
import {
  Button,
  Card
} from "reactstrap"

class AddCard extends Component {
  state = {
    formOpen: false,
    newTask: {}
  }

  toggleFormOpen = state => {
    this.setState({
      [state]: !this.state[state]
    })
  }

  handleInputChange = (e) => {
    e.persist()
    this.setState({
      newTask: {
        ...this.state.newTask,
        list_id: this.props.listId,
        title: `${this.props.nextCard+1}`,
        board_id: this.props.boardId,
        [e.target.name]: e.target.value
      }
    })
  }

  handleAddCard = e => {
    e.preventDefault()
    console.log('taskcard state', this.state.newTask)
    this.props.addTaskCard(this.state.newTask)
    this.toggleFormOpen("formOpen")
  }

  renderAddButton = () => {
    return (
      <div 
      onClick={() => this.toggleFormOpen("formOpen")}
        style={{
        opacity: 0.5, 
        color: "inherit", 
        backgroundColor: "inherit"}}>
        <i className="fas fa-plus" />
        <span>Add another card</span>
      </div>
    )
  }

  renderForm = () => {
   
    return <div>
      <Card style = {{
      overflow: 'visible',
      minHeight: 80,
      minWidth: 272,
      padding: '6px 8x 2px'
      }}>
        <Textarea 
        placeholder = "Enter task"
        autoFocus 
        onBlur={() => this.toggleFormOpen("formOpen")}
        name="description"
        onChange={this.handleInputChange}
        style={{
          resize: 'none',
          width: '100%',
          overflow: 'hidden',
          outline: 'none',
          border: 'none'
        }}
        />
      </Card>
      <div>
        <Button 
        color="primary"
        size="sm" type="button"
        onMouseDown={this.handleAddCard}
        variant='contained' >
          Add card
        </Button>
        <Button
          onClick={() => this.toggleFormOpen("formOpen")}
          size="sm" type="button"
        >
          X
        </Button>
      </div>
    </div>
  }

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton()
  }
}

export default connect(null, {addTaskCard})(AddCard)
