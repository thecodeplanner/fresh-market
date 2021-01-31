import React, {useState} from "react" 
import { useHistory } from "react-router-dom"


function  Signup({setCurrentUser, currentUser}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        // setCurrentUser(true)
        fetch('https://freshmade-market.herokuapp.com/signup', {
            method: "POST",
          })
            .then((r) => r.json())
            // .then(data => setCurrentUser(data))
            .then(setCurrentUser);
           
        return (
          
            history.push('/browse')
            
        )
       
    }

    return (
        <div>      
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>sign up</h2>
            <label htmlFor="name">name</label>
            <br></br>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <br></br>
            <label htmlFor="username">username</label>
            <br></br>
            <input
            type="text"
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
            <input className="button" type="submit" value="create an account" />
        </form>
    </div>
    )

}


export default Signup