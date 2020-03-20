import React,{useState,useEffect,useContext} from 'react';
import '../index.css';
import {container,inputBox,inputStyle,buttonStyle,formContainer} from './auth-style';
import {withRouter,Redirect} from 'react-router';
import firebase from '../../config/firebase';
import { AuthContext } from './Auth';
import {useHistory,useLocation} from 'react-router-dom'

const Login = (props) =>{
    const[email,setEmail] = useState([])
    const[password,setPassword] = useState([])
    const history = useHistory()
    const location = useLocation()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
            if(location.state){
                history.push(location.state.from)
            }else{
                history.push(`/`)
            }
        }catch(e){
            alert(e)
        }
    }

    const UpdateEmail = (event)=>{setEmail(event.target.value)}
    const UpdatePassword = (event)=>{setPassword(event.target.value)}
    const {currentUser} = useContext(AuthContext)

    if(currentUser){
        if(location.state){
            return <Redirect to={{pathname: location.state.from}} />
        }else{
            return <Redirect to={{pathname: "/"}}/>
        }
    }

    return(
        <div style={container}>
            <div style={formContainer}>
                <div className="word">LOGIN</div>
                <form onSubmit={handleSubmit}>
                    <div style={inputBox}>
                        <input style={inputStyle} placeholder="Email Address" type="text" name="email" value={email} onChange={UpdateEmail}/>
                    </div>

                    <div style={inputBox}>
                        <input style={inputStyle} placeholder="Password" type="password" name="password" value={password} onChange={UpdatePassword}/>
                    </div>

                    <input style={buttonStyle} type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login);