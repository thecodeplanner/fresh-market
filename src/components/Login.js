import React, { useState } from "react"
import { useHistory } from "react-router-dom"

function Login({setCurrentUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        // setCurrentUser(true)
        fetch('http://localhost:3000/login', {
            method: "POST",
          })
            .then((r) => r.json())
            .then(setCurrentUser);
        return (
          
            history.push('/browse')
            
        )
       
    }
     
    return (
        <div>      
            <form onSubmit={handleSubmit}>
                <h1>add something here</h1>
                <label htmlFor="username">username</label>
                <br></br>
                <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor="password">password</label>
                <br></br>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                />
                <br></br>
                <br></br>
                <input type="submit" value="login" />
            </form>
        </div>

    ) 
}

export default Login