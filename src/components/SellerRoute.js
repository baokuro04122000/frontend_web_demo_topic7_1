import React from 'react'
import {useSelector} from 'react-redux';
import {Redirect , Route} from 'react-router-dom';
export default function SellerRoute({component:Component,...rest}) {
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;
    return (
        <Route
            {...rest}
            render={(props)=>
                userInfo?.isSeller ? (
                    <Component {...props}/>
                ):(
                    <Redirect to="/signin"/>
                )
            }
        />
    )
}
