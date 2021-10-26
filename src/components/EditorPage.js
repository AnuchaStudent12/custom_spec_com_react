import React,{ useState} from 'react'
import LoginPage from './LoginPage'

export default function EditorPage() {

	const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    role: null
  	});

  	const handleSubmit = async e => {
    e.preventDefault();
    setSession({
      isLoggedIn: false,
      currentUser: null,
      role: null
    })
  	}

	  if(!(session.isLoggedIn) || (session.role == "m") ) {
    return <LoginPage setSession={setSession}/>
  	  }

  return(
    <div>
        <p>Editor</p>
        <p>{session.currentUser}</p>
        <p>{session.role}</p>
      <form onSubmit={handleSubmit}>
      <div>
        <button type="submit">Logout</button>
      </div>
    </form>
    
    </div>
  )
}