import React from 'react'
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  UncontrolledTooltip
} from "reactstrap"

const IssueCard = ({issue}) => {

  return (
    <tr>
      <th scope="row">
        <span className="mb-0 text-sm">
          {issue.title}
        </span>
      </th>
      <td>{issue.priority}</td>
      <td>
        <Badge color="" className="badge-dot">
          <i className="bg-info" />
          {issue.status}
        </Badge>
      </td>
      <td>
        <div className="avatar-group">
          <a
            className="avatar avatar-sm"
            href="#pablo"
            id="tooltip875258217"
            onClick={e => e.preventDefault()}
          >
            <img
              alt="..."
              className="rounded-circle"
              src={require("../../assets/img/theme/team-1-800x800.jpg")}
            />
          </a>
          <UncontrolledTooltip
            delay={0}
            target="tooltip875258217"
          >
            Ryan Tompson
          </UncontrolledTooltip>
        </div>
      </td>
      <td>
        <Badge color="" className="badge-dot">
          {issue.resolved ? <i className="bg-success" /> : <i className="bg-warning" />}
          {issue.resolved ? 'Complete' : 'Not complete'}
        </Badge>
      </td>
      <td className="text-right">
        <UncontrolledDropdown>
          <DropdownToggle
            className="btn-icon-only text-light"
            href="#pablo"
            role="button"
            size="sm"
            color=""
            onClick={e => e.preventDefault()}
          >
            <i className="fas fa-ellipsis-v" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              View
            </DropdownItem>
            <DropdownItem
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Completed
            </DropdownItem>
            <DropdownItem
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
    </tr>
  )
}

export default IssueCard