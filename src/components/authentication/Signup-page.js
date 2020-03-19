import React,{useState,useEffect} from 'react';
import '../index.css';
import {container,inputBox,inputStyle,buttonStyle,formContainer} from './auth-style';

const Signup = (props) =>{
    const[username,setUsername] = useState([])
    const[password,setPassword] = useState([])

    const handleSubmit = (e) =>{
        console.log({" User Name ": username})
        console.log({" password ": password})
        e.preventDefault()
    }

    const UpdateUserName = (event)=>{setUsername(event.target.value)}

    const UpdatePassword = (event)=>{setPassword(event.target.value)}

    return(
        <div style={container}>
            <div style={formContainer}>
                <div className="word">SIGN UP</div>
                <form onSubmit={handleSubmit}>
                    <div style={inputBox}>
                        <input style={inputStyle} placeholder="Email Address" type="text" name="username" value={username} onChange={UpdateUserName}/>
                    </div>

                    <div style={inputBox}>
                        <input style={inputStyle} placeholder="Password" type="password" name="password" value={password} onChange={UpdatePassword}/>
                    </div>

                    <input style={buttonStyle} type="submit" value="Register"/>
                </form>
            </div>
        </div>
    )
}
export default Signup