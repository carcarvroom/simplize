import React, { Component } from 'react'
import Textarea from 'react-textarea-autosize'
import { connect } from 'react-redux'
import { addTaskList } from '../../actions'
import {
  Button,
  Card
} from "reactstrap"

class AddList extends Component {
  state = {
    formOpen: false,
    newList: {
      board_id: this.props.boardId
    }
  }

  toggleFormOpen = state => {
    this.setState({
      [state]: !this.state[state]
    })
  }

  handleInputChange = (e) => {
    e.persist()
    this.setState({
      newList: {
        ...this.state.newList,
        position: this.props.nextList+1,
        [e.target.name]: e.target.value
      }
    })
  }

  handleAddList = (e) => {
    e.preventDefault()
    console.log('new list state', this.state.newList)
    this.props.addTaskList(this.state.newList)
    this.toggleFormOpen("formOpen")
  }

  renderAddButton = () => {
    return (
      <div onClick={() => this.toggleFormOpen("formOpen")}
        style={{
        opacity: 1, 
        color: "white", 
        backgroundColor: "rgba(0,0,0,.15)"}}>
        <i className="fas fa-plus" />
        <span>Add another list</span>
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
      placeholder = "Enter list title" 
      autoFocus 
      onBlur={() => this.toggleFormOpen("formOpen")}
      name="name"
      onChange={(e) => this.handleInputChange(e)}
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
        onMouseDown={(e) => this.handleAddList(e)}
        >
          Add List
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

export default connect(null, {addTaskList})(AddList)
