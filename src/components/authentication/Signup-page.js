import React,{useState,useEffect} from 'react';
import '../index.css';
import {container,inputBox,inputStyle,buttonStyle,formContainer} from './auth-style';
import firebase from '../../config/firebase'
import {useHistory} from 'react-router-dom'
import {withRouter,Redirect} from 'react-router';

const Signup = (props) =>{
    const[email,setEmail] = useState([])
    const[password,setPassword] = useState([])
    const history = useHistory()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            await firebase.auth().createUserWithEmailAndPassword(email,password);
            history.push(`/`)
        }catch(error){
            alert(error)
        }

    }

    const UpdateEmail = (event)=>{setEmail(event.target.value)}

    const UpdatePassword = (event)=>{setPassword(event.target.value)}

    return(
        <div style={container}>
            <div style={formContainer}>
                <div className="word">SIGN UP</div>
                <form onSubmit={handleSubmit}>
                    <div style={inputBox}>
                        <input style={inputStyle} placeholder="Email Address" type="text" name="email" value={email} onChange={UpdateEmail}/>
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
export default withRouter(Signup)