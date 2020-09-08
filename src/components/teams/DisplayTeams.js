import React from "react"
import { connect } from 'react-redux'
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap"

const DisplayTeams = ({teams}) => {

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {teams.map(team => {
                return (
                  <Col lg="6" xl="3" key={team.id}>
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="h2 font-weight-bold mb-0"
                            >
                              {team.name}
                            </CardTitle>
                            <span className=" text-muted mb-0">
                              {team.users.length}{team.users.length === 1 ? ' member': ' members'}
                            </span>
                          </div>
                        </Row>
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <span className="text-success mr-2">
                            <i className="fa fa-arrow-up" /> 
                            {team.boards.length}
                          </span>
                          <span className="text-nowrap">active {team.boards.length === 1 ? ' board' : 'boards'}</span>
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  teams: state.teamReducer
})

export default connect(mapStateToProps)(DisplayTeams)
