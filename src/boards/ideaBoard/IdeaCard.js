import React, {useState} from 'react'
import { connect } from 'react-redux'
import { editIdeaCard, deleteIdea } from '../../actions'
import Typography from "@material-ui/core/Typography";
import Textarea from 'react-textarea-autosize'
import { Draggable } from 'react-beautiful-dnd'
import {
  Card,
  CardBody,
  Button
} from "reactstrap"
import style from './note.module.css'

const IdeaCard = ({idea, boardId, editIdeaCard, deleteIdea}) => {
  const [editIdeaOpen, toggleEditIdeaOpen] = useState(false)
  const [ideaDescription, setIdeaDescription] = useState(idea.description)

  const handleEditIdea = () => {
    editIdeaCard(idea.id, {description: ideaDescription})
  }

  const handleDeleteIdea = () => {
    deleteIdea(idea.id)
  }

  const handleInputChange = e => {
    setIdeaDescription(e.target.value)
    console.log(ideaDescription)
  }

  return (
    // <div className="note">
      <Card className={style.note}>
        <CardBody className="text-center">
        {!editIdeaOpen ?
          <Typography onClick={() => {
            toggleEditIdeaOpen(true)
            setIdeaDescription(idea.description)
          }} gutterBottom>{idea.description}</Typography>
          :
            <div>
              <Textarea 
              value = {ideaDescription}
              autoFocus 
              onBlur={() => toggleEditIdeaOpen(false)}
              name="description"
              onChange={e => handleInputChange(e)}
              style={{
                backgroundColor: "inherit",
                resize: 'none',
                width: '100%',
                overflow: 'hidden',
                outline: 'none',
                border: 'none'
              }}
              />
              <div>
                <Button 
                color="primary"
                size="sm" type="button"
                onMouseDown={() => handleEditIdea()}
                variant='contained' >
                  Edit
                </Button>
                <Button 
                color="danger"
                size="sm" type="button"
                onMouseDown={() => handleDeleteIdea()}
                variant='contained' >
                  Delete
                </Button>
              </div>
            </div>
          }
        </CardBody>
      </Card>
    // </div>
  )
}

export default connect(null, {editIdeaCard, deleteIdea})(IdeaCard)