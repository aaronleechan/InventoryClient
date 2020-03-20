import React, {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {AuthContext} from '../authentication/Auth';

const PrivateRoute = ({component: RouteComponent, ...rest}) =>{
    const {currentUser} = useContext(AuthContext);
    const { path } = rest
    return(
        <Route {...rest} render={(props)=>(
            currentUser ? 
            <RouteComponent {...props}/>
            :
            <Redirect to={{
                pathname: "/login",
                state:{
                    from: path
                },
            }}/>
        )}/>
    );
};
export default PrivateRoute