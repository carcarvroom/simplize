const loadAllTeams = (payload) => ({type: "GET_TEAMS", payload})

export const getTeams = userId => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/teams/${userId}`, {headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}})
      const teamData = await res.json()
      console.log('fetched all teams', teamData)
      dispatch(loadAllTeams(teamData))
    }
    catch(error) {
      console.log('Login Post Error:', error)
    }
  }
}