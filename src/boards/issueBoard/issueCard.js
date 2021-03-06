import React, {useState} from 'react'
import { connect } from 'react-redux'
import { deleteIssue } from '../../actions'
import EditIssueModal from './EditIssueModal'
import IssueModal from './IssueModal'
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  UncontrolledTooltip,
  Modal
} from "reactstrap"

const IssueCard = ({issue, deleteIssue, boardId, user}) => {

  const [editIssueModalOpen, toggleEditIssueModal] = useState(false)
  const [issueModalOpen, toggleIssueModal] = useState(false)

  const handleDelete = issueId => {
    console.log('i got hit')
    deleteIssue(issueId, boardId)
  }

  return (
    <tr>
      <th scope="row">
        <span className="mb-0 text-sm"
          onClick={() => issueModalOpen ? toggleIssueModal(false) : toggleIssueModal(true)}
        >
            {issue.title}
        </span>
      </th>
      <td>
        <Badge color="" className="badge-dot">
          {issue.priority === "High" ? <i className="bg-danger" /> : null}
          {issue.priority === "Medium" ? <i className="bg-info" /> : null}
          {issue.priority === "Low" ? <i className="bg-success" /> : null}
          {issue.priority}
        </Badge>
      </td>
      <td>
        {issue.status === "Resolved" ? <i className="ni ni-check-bold text-green"/> : null }
        {issue.status === "In Review" ? <i className="ni ni-user-run text-yellow"/> : null }
        {issue.status === "Pending" ? <i className="ni ni-atom text-pink"/> : null }
        {issue.status}
      </td>
      <td>
        <div className="avatar-group">
          <a
            className="avatar avatar-sm"
            id="tooltip875258217"
            onClick={e => e.preventDefault()}
          >
            <img
              alt="..."
              className="rounded-circle"
              src={user.profile_img}
            />
          </a>
          <UncontrolledTooltip
            delay={0}
            target="tooltip875258217"
          >
            {user.first_name} {user.last_name}
          </UncontrolledTooltip>
        </div>
      </td>
      <td>
        <UncontrolledDropdown>
          <DropdownToggle
            className="btn-icon-only text-light"
            role="button"
            size="sm"
            color=""
            onClick={e => e.preventDefault()}
          >
            <i className="fas fa-ellipsis-v" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem
              onClick={() => editIssueModalOpen ? toggleEditIssueModal(false) : toggleEditIssueModal(true)}
            >
              Edit
            </DropdownItem>
            <DropdownItem
              onClick={() => handleDelete(issue.id)}
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
      <Modal
      className="modal-dialog-centered"
      isOpen={editIssueModalOpen}
      toggle={() => editIssueModalOpen ? toggleEditIssueModal(false) : toggleEditIssueModal(true)}
      >
        <EditIssueModal boardId={boardId} issue={issue} editIssueModalOpen={editIssueModalOpen} toggleEditIssueModal={toggleEditIssueModal}/>
      </Modal>
      <Modal
      className="modal-dialog-centered"
      isOpen={issueModalOpen}
      toggle={() => issueModalOpen ? toggleIssueModal(false) : toggleIssueModal(true)}
      >
        <IssueModal issue={issue} issueModalOpen={issueModalOpen} toggleIssueModal={toggleIssueModal} toggleEditIssueModal={toggleEditIssueModal}/>
      </Modal>
    </tr>
  )
}

const mapStateToProps = state => ({
  user: state.userReducer.user
})

export default connect(mapStateToProps, {deleteIssue})(IssueCard)