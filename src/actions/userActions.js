const setUser = (payload) => ({ type: "LOGIN", payload})

export const logOutUser = () => ({type: "LOGOUT"})

export const loginUser = user => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
      })
      const userData = await res.json()
      if(userData.error) {
        alert(userData.error)
      } else {
        console.log('just logged in!', userData)
        localStorage.setItem('token', userData.token)
        dispatch(setUser(userData.user))
      }
    }
    catch(error) {
      // add log file
      console.log('Login Post Error:', error)
    }
  }
}

export const signUpUser = user => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
      })
      const userData = await res.json()
      if(userData.error) {
        alert(userData.error)
      } else {
        console.log('just signed up!', userData)
        localStorage.setItem('token', userData.token)
        dispatch(setUser(userData.user))
      }
    }
    catch(error) {
      // add log file
      console.log('Sign Up Post Error:', error)
    }
  }
}

export const autoLogin = () => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/auto_login`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      const userData = await res.json()
      console.log('auto login', userData)
      localStorage.setItem('token', userData.token)
      dispatch(setUser(userData.user))
    }
    catch(error) {
      // add log file
      console.log('Auto-login Error:', error)
    }
  }
}