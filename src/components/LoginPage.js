import React,{ useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


export default function LoginPage({ setSession }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const HandleSubmit = async e => {
    e.preventDefault();
    const {data} = await axios.post('http://sstwork.thddns.net:7771/verifypoto.php', JSON.stringify({
    id: username,
    pass: password
    }));

    //console.log({data});
    //console.log({data}.data);
    //console.log({data}.data.role);

    setSession({
            isLoggedIn: true,
            currentUser: username,
            role: {data}.data.role
            });
  }





  return(
      <div>
        <p>เข้าสู่ระบบสำหรับ Admin</p>
      
    <form onSubmit={HandleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}