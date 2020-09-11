import React from "react";
import { connect } from 'react-redux'
import { getActivity } from '../actions'

import CalendarHeatmap from 'react-calendar-heatmap';
import './calendarStyle.css'
import classnames from "classnames";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

import Header from "./headers/Header"

class Dashboard extends React.Component {
  state = {
      activeNav: 1
  }

  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
    });
  };

  shiftDate = (date, numDays) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays)
    return newDate
  }

  render() {
    const today = new Date()
    const {activity} = this.props
    console.log(activity, 'here')
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Issues
                      </h6>
                      <h3 className="text-white mb-0">Issues Resolved Activity</h3>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1
                            })}
                            onClick={e => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">Year</span>
                            <span className="d-md-none">Y</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2
                            })}
                            data-toggle="tab"
                            onClick={e => this.toggleNavs(e, 2)}
                          >
                            <span className="d-none d-md-block">Month</span>
                            <span className="d-md-none">M</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                <CalendarHeatmap
                  showWeekdayLabels={true}
                  startDate={this.state.activeNav === 1 ? new Date("2020-01-01") : this.shiftDate(today, -30)}
                  endDate={today}
                  values={[
                    { date: '2020-06-01', count: 12 },
                    { date: '2020-01-01', count: 1 },
                    { date: '2020-01-03', count: 4 },
                    { date: '2020-01-06', count: 2 },
                  ]}
                  classForValue={(value) => {
                    if (!value) {
                      return 'color-empty';
                    } else if(value.count >= 0 && value.count <= 3) {
                      return `color-gitlab-1`
                    } else if(value.count > 3 && value.count <= 6) {
                      return `color-gitlab-2`
                    } else if(value.count > 6 && value.count <= 9) {
                      return `color-gitlab-3`
                    } else if(value.count > 9) {
                      return `color-gitlab-4`
                    }
                  }}
                />
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                        Overview
                      </h6>
                      <h3 className="mb-0">Recent Activity</h3>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  { activity ? 
                    activity.map(item => {
                    return <div>{item.trackable_type} created at {item.created_at}</div>
                    })
                  :
                  null
                }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  activity: state.userReducer.activity
})

export default connect(mapStateToProps, {getActivity})(Dashboard)
